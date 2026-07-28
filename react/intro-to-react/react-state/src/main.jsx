import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AnimeList from "./components/AnimeList.jsx";
import AnimalsList from "./components/AnimalsList.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NoUseState from "./components/NoUseState.jsx";
import GotUseState from "./components/GotUseState.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContactForm />
    </StrictMode>,
);
