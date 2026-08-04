import { useState } from "react";
import { Card, CardContent, Checkbox, FormControlLabel, Typography, Button, Box, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarRatingRadio from "./StarRatingRadio";
import ReviewEditor from "./ReviewEditor";

/**
 * Formats a timestamp as relative time
 * @param {number} timestamp - Unix timestamp
 * @returns {string} - Relative time string
 */
function formatRelativeTime(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "just now";
    if (minutes < 60) return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    if (days === 1) return "yesterday";
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} week${Math.floor(days / 7) !== 1 ? "s" : ""} ago`;
    return new Date(timestamp).toLocaleDateString();
}

/**
 * MovieCard - Individual movie card with watched toggle, rating, and review
 * @param {Object} props
 * @param {Object} props.movie - Movie object
 * @param {Function} props.onUpdate - Callback when movie is updated
 */
function MovieCard({ movie, onUpdate }) {
    const [isReviewExpanded, setIsReviewExpanded] = useState(false);

    const handleWatchedToggle = (e) => {
        onUpdate({
            ...movie,
            watched: e.target.checked,
            updatedAt: Date.now(),
        });
    };

    const handleRatingChange = (newRating) => {
        onUpdate({
            ...movie,
            rating: newRating,
            updatedAt: Date.now(),
        });
    };

    const handleReviewSave = (newReview) => {
        onUpdate({
            ...movie,
            review: newReview,
            updatedAt: Date.now(),
        });
        setIsReviewExpanded(false);
    };

    const handleReviewCancel = () => {
        setIsReviewExpanded(false);
    };

    const hasReview = movie.review && movie.review.trim().length > 0;

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
                        <FormControlLabel
                            control={<Checkbox checked={movie.watched} onChange={handleWatchedToggle} inputProps={{ "aria-label": `Mark ${movie.title} as watched` }} />}
                            label={
                                <Typography variant="h6" component="span">
                                    {movie.title}
                                </Typography>
                            }
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <StarRatingRadio value={movie.rating} onChange={handleRatingChange} name={`rating-${movie.id}`} />

                        <Button size="small" variant="outlined" onClick={() => setIsReviewExpanded(!isReviewExpanded)} startIcon={isReviewExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}>
                            {hasReview ? "Edit Review" : "Add Review"}
                        </Button>
                    </Box>
                </Box>

                <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
                    Updated: {formatRelativeTime(movie.updatedAt)}
                </Typography>

                {hasReview && !isReviewExpanded && (
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 2,
                            p: 1.5,
                            backgroundColor: "#f8f9fa",
                            borderRadius: 1,
                            fontStyle: "italic",
                        }}
                    >
                        {movie.review}
                    </Typography>
                )}

                <Collapse in={isReviewExpanded}>
                    <ReviewEditor initialValue={movie.review} onSave={handleReviewSave} onCancel={handleReviewCancel} />
                </Collapse>
            </CardContent>
        </Card>
    );
}

export default MovieCard;
