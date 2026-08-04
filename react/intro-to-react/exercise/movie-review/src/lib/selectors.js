/**
 * Sorting functions for movies
 */

/**
 * Sort by createdAt descending (newest first)
 * @param {Array} items - Array of movies
 * @returns {Array} - Sorted array
 */
export function sortByCreatedAtDesc(items) {
    return [...items].sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * Sort by title ascending (A→Z, case-insensitive)
 * @param {Array} items - Array of movies
 * @returns {Array} - Sorted array
 */
export function sortByTitleAsc(items) {
    return [...items].sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
}

/**
 * Sort by rating descending (highest first, null ratings last)
 * @param {Array} items - Array of movies
 * @returns {Array} - Sorted array
 */
export function sortByRatingDesc(items) {
    return [...items].sort((a, b) => {
        // null ratings go to the end
        if (a.rating === null && b.rating === null) return 0;
        if (a.rating === null) return 1;
        if (b.rating === null) return -1;
        return b.rating - a.rating;
    });
}

/**
 * Main sorting function that dispatches to specific sorters
 * @param {Array} items - Array of movies
 * @param {string} sortKey - One of: 'createdAtDesc', 'titleAsc', 'ratingDesc'
 * @returns {Array} - Sorted array
 */
export function sortItems(items, sortKey) {
    switch (sortKey) {
        case "titleAsc":
            return sortByTitleAsc(items);
        case "ratingDesc":
            return sortByRatingDesc(items);
        case "createdAtDesc":
        default:
            return sortByCreatedAtDesc(items);
    }
}

/**
 * Filtering functions for movies
 */

/**
 * Filter by watched status
 * @param {Array} items - Array of movies
 * @param {string} filterWatched - One of: 'all', 'watched', 'unwatched'
 * @returns {Array} - Filtered array
 */
export function filterByWatched(items, filterWatched) {
    if (filterWatched === "watched") {
        return items.filter((item) => item.watched === true);
    } else if (filterWatched === "unwatched") {
        return items.filter((item) => item.watched === false);
    }
    return items; // 'all'
}

/**
 * Filter by minimum rating (treats null as 0)
 * @param {Array} items - Array of movies
 * @param {number} minRating - Minimum rating (0-5)
 * @returns {Array} - Filtered array
 */
export function filterByMinRating(items, minRating) {
    if (minRating === 0) {
        return items;
    }

    return items.filter((item) => {
        const rating = item.rating === null ? 0 : item.rating;
        return rating >= minRating;
    });
}

/**
 * Apply all filters and sorting
 * @param {Array} items - Array of movies
 * @param {Object} options - Filter and sort options
 * @param {string} options.sortKey - Sort key
 * @param {string} options.filterWatched - Watched filter
 * @param {number} options.filterMinRating - Minimum rating filter
 * @returns {Array} - Filtered and sorted array
 */
export function applyFiltersAndSort(items, { sortKey, filterWatched, filterMinRating }) {
    let result = items;

    // Apply filters first
    result = filterByWatched(result, filterWatched);
    result = filterByMinRating(result, filterMinRating);

    // Then sort
    result = sortItems(result, sortKey);

    return result;
}
