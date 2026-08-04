/**
 * Normalizes a title for duplicate checking
 * Trims, collapses multiple spaces, and converts to lowercase
 * @param {string} title - Title to normalize
 * @returns {string} - Normalized title
 */
export function normalizeTitle(title) {
    return title.trim().replace(/\s+/g, " ").toLowerCase();
}

/**
 * Validates a movie title
 * @param {string} title - Title to validate
 * @returns {Object} - { valid: boolean, error: string }
 */
export function validateTitle(title) {
    if (!title || title.trim().length === 0) {
        return { valid: false, error: "Title is required" };
    }

    if (title.trim().length > 100) {
        return { valid: false, error: "Title must be 100 characters or less" };
    }

    return { valid: true, error: "" };
}

/**
 * Checks if a title is a duplicate (case-insensitive, ignoring extra spaces)
 * @param {string} title - Title to check
 * @param {Array} existingItems - Array of existing movies
 * @param {number} excludeId - Optional ID to exclude from check (for updates)
 * @returns {boolean} - True if duplicate exists
 */
export function isDuplicateTitle(title, existingItems, excludeId = null) {
    const normalized = normalizeTitle(title);

    return existingItems.some((item) => {
        if (excludeId !== null && item.id === excludeId) {
            return false;
        }
        return normalizeTitle(item.title) === normalized;
    });
}

/**
 * Validates a rating
 * @param {number|null} rating - Rating to validate
 * @returns {Object} - { valid: boolean, error: string }
 */
export function validateRating(rating) {
    if (rating === null) {
        return { valid: true, error: "" };
    }

    if (typeof rating !== "number" || rating < 1 || rating > 5) {
        return { valid: false, error: "Rating must be between 1 and 5" };
    }

    return { valid: true, error: "" };
}

/**
 * Validates a review
 * @param {string} review - Review to validate
 * @returns {Object} - { valid: boolean, error: string }
 */
export function validateReview(review) {
    if (typeof review !== "string") {
        return { valid: false, error: "Review must be a string" };
    }

    if (review.length > 500) {
        return { valid: false, error: "Review must be 500 characters or less" };
    }

    return { valid: true, error: "" };
}

/**
 * Validates an entire movie object
 * @param {Object} movie - Movie object to validate
 * @param {Array} existingItems - Array of existing movies (for duplicate check)
 * @returns {Object} - { valid: boolean, errors: Object }
 */
export function validateMovie(movie, existingItems = []) {
    const errors = {};

    const titleValidation = validateTitle(movie.title);
    if (!titleValidation.valid) {
        errors.title = titleValidation.error;
    } else if (isDuplicateTitle(movie.title, existingItems, movie.id)) {
        errors.title = "That movie is already in your list";
    }

    const ratingValidation = validateRating(movie.rating);
    if (!ratingValidation.valid) {
        errors.rating = ratingValidation.error;
    }

    const reviewValidation = validateReview(movie.review);
    if (!reviewValidation.valid) {
        errors.review = reviewValidation.error;
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}
