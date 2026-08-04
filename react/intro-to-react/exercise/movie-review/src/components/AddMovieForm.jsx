import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import StarRatingRadio from "./StarRatingRadio";

/**
 * AddMovieForm - Form to add a new movie
 * @param {Object} props
 * @param {Function} props.onAdd - Callback when a movie is added
 * @param {Array} props.existingItems - Existing movies for duplicate check
 */
function AddMovieForm({ onAdd, existingItems }) {
    const [title, setTitle] = useState("");
    const [initialRating, setInitialRating] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Create new movie object
        const newMovie = {
            title: title.trim(),
            rating: initialRating,
            watched: false,
            review: "",
        };

        // Call parent callback
        onAdd(newMovie);

        // Clear form
        setTitle("");
        setInitialRating(null);
        setError("");
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: 3,
                mb: 3,
                backgroundColor: "#f8f9fa",
                borderRadius: 2,
                border: "1px solid #dee2e6",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Add Movie
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start", flexWrap: "wrap" }}>
                <TextField
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    error={Boolean(error)}
                    helperText={error}
                    required
                    sx={{ flexGrow: 1, minWidth: 200 }}
                    inputProps={{
                        maxLength: 100,
                        "aria-label": "Movie title",
                    }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                    <Typography variant="body2" color="text.secondary">
                        Initial Rating (optional)
                    </Typography>
                    <StarRatingRadio value={initialRating} onChange={setInitialRating} name="initial-rating" />
                </Box>

                <Button type="submit" variant="contained" sx={{ height: 56 }}>
                    Add
                </Button>
            </Box>
        </Box>
    );
}

export default AddMovieForm;
