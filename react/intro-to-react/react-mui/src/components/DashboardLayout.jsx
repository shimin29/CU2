// import Grid from "@mui/material/Grid";
import { Paper, Typography, Grid } from "@mui/material";

const DashboardLayout = () => {
    return (
        <Grid container spacing={3} sx={{ width: "100%", p: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={15} sx={{ p: 2, height: 100 }}>
                    <Typography>Widget A (Left/Top)</Typography>
                </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 2, height: 100 }}>
                    <Typography>Widget B (Right/Bottom)</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default DashboardLayout;
