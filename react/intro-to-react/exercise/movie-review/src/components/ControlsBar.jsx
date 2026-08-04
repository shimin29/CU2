import { Box, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Slider, Typography, Button, Paper } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";

/**
 * ControlsBar - Controls for sorting, filtering, and data export/import
 * @param {Object} props
 * @param {string} props.sortKey - Current sort key
 * @param {Function} props.onSortChange - Callback when sort changes
 * @param {string} props.filterWatched - Current watched filter
 * @param {Function} props.onFilterWatchedChange - Callback when watched filter changes
 * @param {number} props.filterMinRating - Current min rating filter
 * @param {Function} props.onFilterMinRatingChange - Callback when min rating changes
 * @param {Function} props.onExport - Callback to export data
 * @param {Function} props.onImportClick - Callback when import button is clicked
 */
function ControlsBar({ sortKey, onSortChange, filterWatched, onFilterWatchedChange, filterMinRating, onFilterMinRatingChange, onExport, onImportClick }) {
    const handleMinRatingChange = (event, newValue) => {
        onFilterMinRatingChange(newValue);
    };

    return (
        <Paper
            sx={{
                p: 3,
                mb: 3,
                backgroundColor: "#ffffff",
                border: "1px solid #dee2e6",
            }}
        >
            <Typography variant="h6" gutterBottom>
                Controls
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* First row: Sort and Watched filter */}
                <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", alignItems: "flex-start" }}>
                    {/* Sort select */}
                    <FormControl sx={{ minWidth: 200 }}>
                        <InputLabel id="sort-label">Sort</InputLabel>
                        <Select labelId="sort-label" value={sortKey} label="Sort" onChange={(e) => onSortChange(e.target.value)}>
                            <MenuItem value="createdAtDesc">Created (newest first)</MenuItem>
                            <MenuItem value="titleAsc">Title (A→Z)</MenuItem>
                            <MenuItem value="ratingDesc">Rating (high→low)</MenuItem>
                        </Select>
                    </FormControl>

                    {/* Watched filter */}
                    <FormControl>
                        <FormLabel id="watched-filter-label">Watched</FormLabel>
                        <RadioGroup row aria-labelledby="watched-filter-label" value={filterWatched} onChange={(e) => onFilterWatchedChange(e.target.value)}>
                            <FormControlLabel value="all" control={<Radio />} label="All" />
                            <FormControlLabel value="watched" control={<Radio />} label="Watched" />
                            <FormControlLabel value="unwatched" control={<Radio />} label="Unwatched" />
                        </RadioGroup>
                    </FormControl>
                </Box>

                {/* Second row: Min rating slider */}
                <Box sx={{ maxWidth: 300 }}>
                    <Typography id="min-rating-slider" gutterBottom>
                        Minimum Rating: {filterMinRating === 0 ? "All" : `${filterMinRating} star${filterMinRating !== 1 ? "s" : ""}`}
                    </Typography>
                    <Slider value={filterMinRating} onChange={handleMinRatingChange} aria-labelledby="min-rating-slider" min={0} max={5} step={1} marks valueLabelDisplay="auto" />
                </Box>

                {/* Third row: Export/Import actions */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="outlined" startIcon={<DownloadIcon />} onClick={onExport}>
                        Export JSON
                    </Button>
                    <Button variant="outlined" startIcon={<UploadIcon />} onClick={onImportClick}>
                        Import JSON
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default ControlsBar;
