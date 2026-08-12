const STORAGE_KEY = "subscription.tracker.data";

export function loadSubscriptions() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Failed to load subscriptions", error);
        return [];
    }
}

export function saveSubscriptions(subscriptions) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
}

export function deleteSubscription(id) {
    const subscriptions = loadSubscriptions();

    const updatedSubscriptions = subscriptions.filter((sub) => sub.id !== id);

    saveSubscriptions(updatedSubscriptions);

    return updatedSubscriptions;
}

export function updateSubscription(updatedSubscription) {
    const subscriptions = loadSubscriptions();

    const updatedSubscriptions = subscriptions.map((sub) => (sub.id === updatedSubscription.id ? updatedSubscription : sub));

    saveSubscriptions(updatedSubscriptions);

    return updatedSubscriptions;
}
