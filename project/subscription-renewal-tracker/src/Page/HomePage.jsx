import { Container, Typography, Card, CardContent, Button, Stack, Box, Select, MenuItem } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loadSubscriptions, deleteSubscription, saveSubscriptions } from "../utils/storage";
import SubscriptionCard from "../components/SubscriptionCard";

export default function HomePage() {
    const [subscriptions, setSubscriptions] = useState(() => loadSubscriptions());

    const [categoryFilter, setCategoryFilter] = useState("all");

    const handleDelete = (id) => {
        const updatedSubscriptions = deleteSubscription(id);
        setSubscriptions(updatedSubscriptions);
    };

    const handleToggleStatus = (id) => {
        const updatedSubscriptions = subscriptions.map((sub) =>
            sub.id === id
                ? {
                      ...sub,
                      status: sub.status === "cancelled" ? "active" : "cancelled",
                  }
                : sub,
        );

        saveSubscriptions(updatedSubscriptions);

        setSubscriptions(updatedSubscriptions);
    };

    const handleRenew = (id) => {
        const updatedSubscriptions = subscriptions.map((sub) => {
            if (sub.id !== id) return sub;

            const currentDate = new Date(sub.renewalDate);

            // Add 1 month or 1 year
            if (sub.billingCycle === "monthly") {
                currentDate.setMonth(currentDate.getMonth() + 1);
            } else {
                currentDate.setFullYear(currentDate.getFullYear() + 1);
            }

            return {
                ...sub,
                renewalDate: currentDate.toISOString().split("T")[0],
            };
        });

        saveSubscriptions(updatedSubscriptions);

        setSubscriptions(updatedSubscriptions);
    };

    // Monthly total (yearly subscriptions converted to monthly)
    const monthlyTotal = subscriptions
        .filter((sub) => sub.status !== "cancelled")
        .reduce((total, sub) => {
            const cost = Number(sub.cost) || 0;

            return sub.billingCycle === "yearly" ? total + cost / 12 : total + cost;
        }, 0);

    // Yearly total (monthly subscriptions converted to yearly)
    const yearlyTotal = subscriptions
        .filter((sub) => sub.status !== "cancelled")
        .reduce((total, sub) => {
            const cost = Number(sub.cost) || 0;

            return sub.billingCycle === "monthly" ? total + cost * 12 : total + cost;
        }, 0);

    // Filter subscriptions by category
    const filteredSubscriptions = categoryFilter === "all" ? subscriptions : subscriptions.filter((sub) => sub.category === categoryFilter);

    // Upcoming renewals (next 7 days)
    const upcomingRenewals = subscriptions.filter((sub) => {
        if (sub.status === "cancelled") return false;

        const today = new Date();
        const renewalDate = new Date(sub.renewalDate);

        const diffTime = renewalDate - today;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        return diffDays >= 0 && diffDays <= 7;
    });

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f5f7fb",
                py: 0,
            }}
        >
            {/* Navigation */}
            <Box
                sx={{
                    bgcolor: "white",
                    borderBottom: "1px solid #e5e7eb",
                    mb: 5,
                }}
            >
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <SubscriptionsOutlinedIcon color="primary" />

                            <Typography variant="h6" fontWeight="bold">
                                Subscription Tracker
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Button
                                component={Link}
                                to="/"
                                sx={{
                                    textTransform: "none",
                                    fontWeight: 600,
                                }}
                            >
                                Home
                            </Button>

                            <Button
                                component={Link}
                                to="/add"
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 3,
                                    px: 3,
                                }}
                            >
                                Add Subscription
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="lg">
                {/* Dashboard Title */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                        Dashboard
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        Monitor your subscriptions, monthly spending, and upcoming renewals.
                    </Typography>
                </Box>

                {/* Summary Cards */}
                <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mb: 4 }}>
                    {/* Monthly */}
                    <Card
                        sx={{
                            flex: 1,
                            borderRadius: 4,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Monthly Spend
                                    </Typography>

                                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                                        RM {monthlyTotal.toFixed(2)}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        bgcolor: "primary.main",
                                        color: "white",
                                        width: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <PaymentsOutlinedIcon />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Yearly */}
                    <Card
                        sx={{
                            flex: 1,
                            borderRadius: 4,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Box>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        Yearly Spend
                                    </Typography>

                                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                                        RM {yearlyTotal.toFixed(2)}
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        bgcolor: "success.main",
                                        color: "white",
                                        width: 48,
                                        height: 48,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <SavingsOutlinedIcon />
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Stack>

                {upcomingRenewals.length > 0 && (
                    <Card
                        sx={{
                            mb: 4,
                            borderRadius: 4,
                            bgcolor: "#fff7ed",
                            border: "1px solid #fdba74",
                            boxShadow: "0 2px 10px rgba(251, 146, 60, 0.12)",
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                <Typography variant="h6" fontWeight="bold" color="#c2410c">
                                    Upcoming Renewals
                                </Typography>
                            </Stack>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Subscriptions renewing within the next 7 days.
                            </Typography>

                            <Stack spacing={1.5}>
                                {upcomingRenewals.map((sub) => (
                                    <Box
                                        key={sub.id}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            py: 1,
                                            px: 2,
                                            borderRadius: 2,
                                            bgcolor: "rgba(255,255,255,0.7)",
                                        }}
                                    >
                                        <Box>
                                            <Typography fontWeight="bold">{sub.name}</Typography>

                                            <Typography variant="body2" color="text.secondary">
                                                {sub.category || "Uncategorized"}
                                            </Typography>
                                        </Box>

                                        <Typography variant="body2" fontWeight="bold" color="#c2410c">
                                            {sub.renewalDate}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                )}

                {/* Category Filter */}
                <Box sx={{ mb: 4 }}>
                    <Select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        size="small"
                        sx={{
                            minWidth: 220,
                            bgcolor: "white",
                            borderRadius: 2,
                        }}
                    >
                        <MenuItem value="all">All Categories</MenuItem>
                        <MenuItem value="Movie">Movie</MenuItem>
                        <MenuItem value="Music">Music</MenuItem>
                        <MenuItem value="Productivity">Productivity</MenuItem>
                        <MenuItem value="Fitness">Fitness</MenuItem>
                        <MenuItem value="Cloud Storage">Cloud Storage</MenuItem>
                        <MenuItem value="Gaming">Gaming</MenuItem>
                        <MenuItem value="Education">Education</MenuItem>
                        <MenuItem value="Software">Software</MenuItem>
                    </Select>
                </Box>

                {filteredSubscriptions.length === 0 ? (
                    /* Empty State */
                    <Card
                        sx={{
                            borderRadius: 4,
                            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                        }}
                    >
                        <CardContent
                            sx={{
                                textAlign: "center",
                                py: 7,
                                px: 4,
                            }}
                        >
                            <SubscriptionsOutlinedIcon
                                sx={{
                                    fontSize: 64,
                                    color: "text.disabled",
                                    mb: 2,
                                }}
                            />

                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                No subscriptions found
                            </Typography>

                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{
                                    mb: 4,
                                    maxWidth: 500,
                                    mx: "auto",
                                }}
                            >
                                Try changing the category filter or add a new subscription.
                            </Typography>

                            <Button
                                component={Link}
                                to="/add"
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{
                                    borderRadius: 3,
                                    textTransform: "none",
                                    px: 4,
                                    py: 1.2,
                                }}
                            >
                                Add Subscription
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    /* Subscription List */
                    <Stack spacing={3}>
                        {filteredSubscriptions.map((sub) => (
                            <SubscriptionCard key={sub.id} sub={sub} onDelete={handleDelete} onToggleStatus={handleToggleStatus} onRenew={handleRenew} />
                        ))}
                    </Stack>
                )}
            </Container>
        </Box>
    );
}
