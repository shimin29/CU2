import { Card, CardContent, Typography, Button, Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SubscriptionCard({ sub, onDelete, onToggleStatus, onRenew }) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "0.2s",
                "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
                },
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="h6" fontWeight="bold">
                            {sub.name}
                        </Typography>

                        <Box
                            sx={{
                                px: 1,
                                py: "2px",
                                borderRadius: "999px",
                                fontSize: "0.68rem",
                                fontWeight: 600,
                                lineHeight: 1.2,
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                bgcolor: sub.status === "cancelled" ? "#fee2e2" : "#ccfbf1",
                                color: sub.status === "cancelled" ? "#b91c1c" : "#0f766e",
                                border: sub.status === "cancelled" ? "1px solid #fecaca" : "1px solid #99f6e4",
                            }}
                        >
                            {sub.status === "cancelled" ? "Cancelled" : "Active"}
                        </Box>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                        {sub.category || "Uncategorized"} • {sub.billingCycle}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Renew: {sub.renewalDate}
                    </Typography>
                </Box>

                <Stack alignItems="flex-end" spacing={1}>
                    <Typography variant="h6" fontWeight="bold">
                        RM {Number(sub.cost).toFixed(2)}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Button
                            component={Link}
                            to={`/edit/${sub.id}`}
                            variant="outlined"
                            size="small"
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                            }}
                        >
                            Edit
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            disabled={sub.status === "cancelled"}
                            onClick={() => onRenew(sub.id)}
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                            }}
                        >
                            Renew
                        </Button>

                        <Button
                            variant="outlined"
                            color={sub.status === "cancelled" ? "success" : "warning"}
                            size="small"
                            onClick={() => onToggleStatus(sub.id)}
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                            }}
                        >
                            {sub.status === "cancelled" ? "Activate" : "Cancel"}
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            size="small"
                            onClick={() => onDelete(sub.id)}
                            sx={{
                                textTransform: "none",
                                borderRadius: 2,
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
