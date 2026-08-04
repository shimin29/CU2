import { Alert, Button, Snackbar } from "@mui/material";
import { useState } from "react";

const NotificationSystem = () => {
    const [open, setOpen] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Alert severity="error">Your subscription will expire soon!</Alert>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
             <Alert severity="info">Your haven't any subscription!!</Alert>  {/* info is blue, error is red, success is green   */}


            <Button variant="outlined" onClick={() => setOpen(true)}>
                Save Changes
            </Button>

            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert severity="success" variant="filled" onClose={() => setOpen(false)}>
                    Changes saved successfully!
                </Alert>
            </Snackbar>
        </div>
        </div>
    );
};

export default NotificationSystem;
