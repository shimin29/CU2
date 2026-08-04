import { useState, useEffect, useMemo } from "react";
import { Container, Typography, Box } from "@mui/material";
import AddMovieForm from "./components/AddMovieForm";
import ControlsBar from "./components/ControlsBar";
import MovieList from "./components/MovieList";
import ExportImportPanel from "./components/ExportImportPanel";
import { loadData, saveData } from "./lib/storage";
import { applyFiltersAndSort } from "./lib/selectors";

function App() {
    // Data state - initialize with loadData() using lazy initializer
    const [data, setData] = useState(() => loadData());
    console.log(data);

    // UI state
    const [sortKey, setSortKey] = useState("createdAtDesc");
    const [filterWatched, setFilterWatched] = useState("all");
    const [filterMinRating, setFilterMinRating] = useState(0);
    const [importDialogOpen, setImportDialogOpen] = useState(false);

    // Save data whenever it changes
    useEffect(() => {
        saveData(data);
    }, [data]);

    // Derived list: apply filters and sorting
    const displayedMovies = useMemo(() => {
        return applyFiltersAndSort(data.items, {
            sortKey,
            filterWatched,
            filterMinRating,
        });
    }, [data.items, sortKey, filterWatched, filterMinRating]);

    // Add movie handler
    const handleAddMovie = (movie) => {
        const now = Date.now();
        const newMovie = {
            id: data.nextId,
            ...movie,
            createdAt: now,
            updatedAt: now,
        };

        setData({
            ...data,
            nextId: data.nextId + 1,
            items: [...data.items, newMovie],
        });
    };

    // Update movie handler
    const handleUpdateMovie = (updatedMovie) => {
        setData({
            ...data,
            items: data.items.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie)),
        });
    };

    // Export handler
    const handleExport = () => {
        const jsonData = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mr-export.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    // Import handler
    const handleImport = (importedData) => {
        setData(importedData);
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
                Movie Watchlist
            </Typography>

            <ControlsBar sortKey={sortKey} onSortChange={setSortKey} filterWatched={filterWatched} onFilterWatchedChange={setFilterWatched} filterMinRating={filterMinRating} onFilterMinRatingChange={setFilterMinRating} onExport={handleExport} onImportClick={() => setImportDialogOpen(true)} />

            <AddMovieForm onAdd={handleAddMovie} existingItems={data.items} />

            <MovieList movies={displayedMovies} onUpdate={handleUpdateMovie} />

            <ExportImportPanel open={importDialogOpen} onClose={() => setImportDialogOpen(false)} onImport={handleImport} />
        </Container>
    );
}

export default App;
