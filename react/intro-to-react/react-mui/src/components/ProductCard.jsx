import { Card, CardContent, CardMedia, CardActions, Typography, Button } from "@mui/material";

const ProductCard = () => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
            <CardMedia component="img" height={140} image="https://t3.ftcdn.net/jpg/03/60/79/46/360_F_360794641_xzRpOR1Lw7vga9MFodSy8undko0aErf2.jpg" alt="Calico cat" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Classic Calico Cat
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="inherit">
                    Learn more
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
