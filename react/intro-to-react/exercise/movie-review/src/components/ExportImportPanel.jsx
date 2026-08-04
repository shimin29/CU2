import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Alert } from "@mui/material";
import { validateData } from "../lib/storage";

/**
 * ExportImportPanel - Dialog for importing data with validation
 * @param {Object} props
 * @param {boolean} props.open - Whether the dialog is open
 * @param {Function} props.onClose - Callback to close the dialog
 * @param {Function} props.onImport - Callback with validated data to import
 */
function ExportImportPanel({ open, onClose, onImport }) {
    const [error, setError] = useState("");
    const [importData, setImportData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setError("");
            setImportData(null);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = JSON.parse(e.target.result);

                // Validate the data structure
                if (!validateData(jsonData)) {
                    setError("Invalid data format. Please select a valid export file.");
                    setImportData(null);
                    return;
                }

                setImportData(jsonData);
                setError("");
            } catch {
                setError("Failed to parse JSON file. Please check the file format.");
                setImportData(null);
            }
        };

        reader.onerror = () => {
            setError("Failed to read file.");
            setImportData(null);
        };

        reader.readAsText(file);
    };

    const handleImport = () => {
        if (importData) {
            onImport(importData);
            handleClose();
        }
    };

    const handleClose = () => {
        setError("");
        setImportData(null);
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Import JSON</DialogTitle>
            <DialogContent>
                <Box sx={{ py: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Choose a JSON file previously exported from this app.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mb: 2 }}>
                        Warning: This will replace all your current data.
                    </Typography>

                    <Button variant="outlined" component="label" fullWidth sx={{ mb: 2 }}>
                        Choose File
                        <input type="file" hidden accept=".json,application/json" onChange={handleFileChange} />
                    </Button>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    {importData && (
                        <Alert severity="success">
                            Valid data file found: {importData.items.length} movie{importData.items.length !== 1 ? "s" : ""}
                        </Alert>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleImport} variant="contained" disabled={!importData}>
                    Import
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ExportImportPanel;
