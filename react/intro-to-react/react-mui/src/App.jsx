// Theme Configuration
import { createTheme, ThemeProvider, CssBaseline, Button } from "@mui/material";
import ResponsiveCard from "./components/ResponsiveCard";
import DashboardLayout from "./components/DashboardLayout";
import ProductCard from "./components/ProductCard";
import NotificationSystem from "./components/NotificationSystem";
import MuiInputsShowcase from "./components/MuiInputsShowcase";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2196f3",
        },
        secondary: {
            main: "#f50057",
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
        h1: { fontSize: "2.5rem", fontWeight: 600 },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" color="secondary">
                Theme Aware Button
            </Button>
            <ResponsiveCard />
            <DashboardLayout />
            <ProductCard />
            <NotificationSystem />
            <MuiInputsShowcase />
        </ThemeProvider>
    );
};

export default App;
