import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import DetailsPage from "./Page/DetailsPage";
import FormPage from "./Page/FormPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="/subscription/:id" element={<DetailsPage />} />

                <Route path="/add" element={<FormPage />} />
                <Route path="/edit/:id" element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
