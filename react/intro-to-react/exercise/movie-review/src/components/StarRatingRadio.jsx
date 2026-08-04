import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

/**
 * StarRatingRadio - Accessible star rating component using radio semantics
 * @param {Object} props
 * @param {number|null} props.value - Current rating (1-5 or null)
 * @param {Function} props.onChange - Callback when rating changes
 * @param {boolean} props.readOnly - Whether the rating is read-only
 * @param {string} props.name - Name for the radio group
 */
function StarRatingRadio({ value, onChange, readOnly = false, name = "rating" }) {
    const handleChange = (event, newValue) => {
        // Material UI Rating returns null when cleared, or a number 1-5
        onChange(newValue);
    };

    return (
        <Rating
            name={name}
            value={value}
            onChange={handleChange}
            readOnly={readOnly}
            emptyIcon={<StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />}
            sx={{
                "& .MuiRating-iconFilled": {
                    color: "#ffc107",
                },
                "& .MuiRating-iconHover": {
                    color: "#ffb300",
                },
            }}
        />
    );
}

export default StarRatingRadio;
