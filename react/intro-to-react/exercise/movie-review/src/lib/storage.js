const STORAGE_KEY = "mr.data";
const CURRENT_VERSION = 1;

/**
 * Validates the data structure from localStorage
 * @param {any} data - Data to validate
 * @returns {boolean} - True if valid
 */
export function validateData(data) {
    if (!data || typeof data !== "object") {
        return false;
    }

    if (data.version !== CURRENT_VERSION) {
        return false;
    }

    if (typeof data.nextId !== "number" || data.nextId < 1) {
        return false;
    }

    if (!Array.isArray(data.items)) {
        return false;
    }

    // Validate each item has required fields
    for (const item of data.items) {
        if (
            typeof item.id !== "number" ||
            typeof item.title !== "string" ||
            typeof item.watched !== "boolean" ||
            (item.rating !== null && (typeof item.rating !== "number" || item.rating < 1 || item.rating > 5)) ||
            typeof item.review !== "string" ||
            typeof item.createdAt !== "number" ||
            typeof item.updatedAt !== "number"
        ) {
            return false;
        }
    }

    return true;
}

/**
 * Loads data from localStorage
 * @returns {Object} - Data object with version, nextId, and items
 */
export function loadData() {
    try {
        const rawData = localStorage.getItem(STORAGE_KEY);

        if (!rawData) {
            // Return initial empty state
            return {
                version: CURRENT_VERSION,
                nextId: 1,
                items: [],
            };
        }

        const data = JSON.parse(rawData);

        if (validateData(data)) {
            return data;
        } else {
            console.warn("Invalid data in localStorage, returning empty state");
            return {
                version: CURRENT_VERSION,
                nextId: 1,
                items: [],
            };
        }
    } catch (error) {
        console.error("Error loading data from localStorage:", error);
        return {
            version: CURRENT_VERSION,
            nextId: 1,
            items: [],
        };
    }
}

/**
 * Saves data to localStorage
 * @param {Object} data - Data object with version, nextId, and items
 */
export function saveData(data) {
    try {
        if (!validateData(data)) {
            console.error("Attempted to save invalid data");
            return;
        }

        const jsonData = JSON.stringify(data);
        localStorage.setItem(STORAGE_KEY, jsonData);
    } catch (error) {
        console.error("Error saving data to localStorage:", error);
    }
}

/**
 * Clears all data from localStorage (useful for testing)
 */
export function clearData() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error("Error clearing data from localStorage:", error);
    }
}
