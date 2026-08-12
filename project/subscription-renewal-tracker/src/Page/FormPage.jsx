import { useState, useEffect } from "react";
import { Container, Typography, Card, CardContent, TextField, Button, Stack, MenuItem, Box } from "@mui/material";

import { Link, useNavigate, useParams } from "react-router-dom";
import { loadSubscriptions, saveSubscriptions, updateSubscription } from "../javascript/storage";

export default function FormPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({ name: "", cost: "", billingCycle: "monthly", renewalDate: "", category: "", paymentMethod: "" });

    useEffect(() => {
        if (id) {
            const subscriptions = loadSubscriptions();

            const subscription = subscriptions.find((sub) => sub.id === Number(id));

            if (subscription) {
                setFormData(subscription);
            }
        }
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //edit mode
        if (id) {
            updateSubscription({
                id: Number(id),
                ...formData,
            });
        } else {
            // Add mode
            const subscriptions = loadSubscriptions();

            const newSubscription = {
                id: Date.now(),
                ...formData,
                status: "active",
            };

            subscriptions.push(newSubscription);

            saveSubscriptions(subscriptions);
        }

        navigate("/");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f5f7fb",
                py: 6,
            }}
        >
            <Container maxWidth="sm">
                <Button
                    component={Link}
                    to="/"
                    sx={{
                        mb: 3,
                        textTransform: "none",
                    }}
                >
                    ← Back to Home
                </Button>

                <Card
                    sx={{
                        borderRadius: 4,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                            {id ? "Edit Subscription" : "Add Subscription"}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                            Enter your subscription details below.
                        </Typography>

                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField label="Service Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />

                                 {/* cost的limit */}
                                <TextField
                                    label="Cost (RM)"
                                    name="cost"
                                    type="number"
                                    inputProps={{
                                        min: 0,
                                        step: "0.01",
                                    }}
                                    value={formData.cost}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                />

                                <TextField select label="Billing Cycle" name="billingCycle" value={formData.billingCycle} onChange={handleChange} fullWidth>
                                    <MenuItem value="monthly">Monthly</MenuItem>
                                    <MenuItem value="yearly">Yearly</MenuItem>
                                </TextField>

                                <TextField
                                    label="Next Renewal Date"
                                    name="renewalDate"
                                    type="date"
                                    value={formData.renewalDate}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    slotProps={{
                                        inputLabel: {
                                            shrink: true,
                                        },
                                    }}
                                />

                                <TextField select label="Category" name="category" value={formData.category} onChange={handleChange} fullWidth required>
                                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                                    <MenuItem value="Music">Music</MenuItem>
                                    <MenuItem value="Productivity">Productivity</MenuItem>
                                    <MenuItem value="Cloud Storage">Cloud Storage</MenuItem>
                                    <MenuItem value="Gaming">Gaming</MenuItem>
                                    <MenuItem value="Fitness">Fitness</MenuItem>
                                    <MenuItem value="Software">Software</MenuItem>
                                    <MenuItem value="Education">Education</MenuItem>
                                </TextField>

                                <TextField select label="Payment Method" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} fullWidth required>
                                    <MenuItem value="Visa">Visa</MenuItem>
                                    <MenuItem value="MasterCard">MasterCard</MenuItem>
                                    <MenuItem value="TNG eWallet">TNG eWallet</MenuItem>
                                    <MenuItem value="Apple Pay">Apple Pay</MenuItem>
                                    <MenuItem value="PayPal">PayPal</MenuItem>
                                    <MenuItem value="FPX">FPX</MenuItem>
                                </TextField>

                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 2 }}>
                                    <Button
                                        component={Link}
                                        to="/"
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            py: 1.2,
                                            textTransform: "none",
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={!formData.name || !formData.cost || !formData.renewalDate || !formData.category || !formData.paymentMethod}
                                        sx={{
                                            py: 1.2,
                                            textTransform: "none",
                                        }}
                                    >
                                        Save Subscription
                                    </Button>
                                </Stack>
                            </Stack>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}
