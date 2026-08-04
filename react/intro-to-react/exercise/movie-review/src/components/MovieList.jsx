import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

/**
 * MovieList - Renders a list of movie cards or empty state
 * @param {Object} props
 * @param {Array} props.movies - Array of movies to display
 * @param {Function} props.onUpdate - Callback when a movie is updated
 */
function MovieList({ movies, onUpdate }) {
    if (movies.length === 0) {
        return (
            <Box
                sx={{
                    p: 4,
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                    borderRadius: 2,
                    border: "1px solid #dee2e6",
                }}
            >
                <Typography variant="h6" color="text.secondary">
                    No movies yet. Add your first movie to get started!
                </Typography>
            </Box>
        );
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Movies
            </Typography>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onUpdate={onUpdate} />
            ))}
        </Box>
    );
}

export default MovieList;
