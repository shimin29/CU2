import { Container, Typography, Card, CardContent, Button, Stack, Chip } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function DetailsPage() {
    const { id } = useParams();

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Button component={Link} to="/" sx={{ mb: 3 }}>
                ← Back
            </Button>

            <Card sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight="bold">
                            Netflix
                        </Typography>

                        <Chip label="Active" color="success" sx={{ width: "fit-content" }} />

                        <Typography>
                            <strong>Cost:</strong> RM 45.90
                        </Typography>

                        <Typography>
                            <strong>Billing Cycle:</strong> Monthly
                        </Typography>

                        <Typography>
                            <strong>Category:</strong> Entertainment
                        </Typography>

                        <Typography>
                            <strong>Payment Method:</strong> Visa
                        </Typography>

                        <Typography>
                            <strong>Next Renewal:</strong> 2026-08-20
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                            <Button variant="contained">Edit</Button>

                            <Button variant="outlined" color="error">
                                Delete
                            </Button>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}
