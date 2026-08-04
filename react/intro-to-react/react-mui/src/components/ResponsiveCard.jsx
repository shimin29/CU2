import { Box, Typography } from "@mui/material";

export default function ResponsiveCard() {
    return (
        <Box
            sx={{
                // Uses spacing tokens: 2 * 8px = 16px padding
                p: 2,
                // Token mapping: 'primary.main' resolves to hex color from theme
                backgroundColor: "background.paper",
                borderRadius: 2,
                boxShadow: 3,
                // Responsive widths based on theme breakpoints (xs, md)
                width: {
                    xs: "100%", // 0px and up
                    sm: "100%", // 600px and up
                    md: "400px", // 900px and up
                },
                // Hover pseudo-class example
                "&:hover": {
                    boxShadow: 6,
                },
            }}
        >
            <Typography variant="h1" component="h6" color="text.primary">
                Responsive Box Component
            </Typography>
        </Box>
    );
}
