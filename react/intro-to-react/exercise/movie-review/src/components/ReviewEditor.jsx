import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const MAX_REVIEW_LENGTH = 500;

/**
 * ReviewEditor - Collapsible textarea for editing movie reviews
 * @param {Object} props
 * @param {string} props.initialValue - Initial review text
 * @param {Function} props.onSave - Callback when review is saved
 * @param {Function} props.onCancel - Callback when editing is cancelled
 */
function ReviewEditor({ initialValue = "", onSave, onCancel }) {
    const [review, setReview] = useState(initialValue);

    const handleSave = () => {
        if (review.length > MAX_REVIEW_LENGTH) {
            return;
        }
        onSave(review);
    };

    const handleCancel = () => {
        setReview(initialValue);
        onCancel();
    };

    const isOverLimit = review.length > MAX_REVIEW_LENGTH;
    const charCount = review.length;

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
                Review (max {MAX_REVIEW_LENGTH} characters)
            </Typography>

            <TextField
                multiline
                rows={4}
                fullWidth
                value={review}
                onChange={(e) => setReview(e.target.value)}
                error={isOverLimit}
                sx={{ mb: 1 }}
                inputProps={{
                    "aria-label": "Movie review",
                    maxLength: MAX_REVIEW_LENGTH + 100, // Soft limit, we show error
                }}
            />

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="caption" color={isOverLimit ? "error" : "text.secondary"}>
                    {charCount} / {MAX_REVIEW_LENGTH}
                </Typography>

                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button variant="outlined" size="small" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={handleSave} disabled={isOverLimit}>
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default ReviewEditor;
