import { useState } from "react";
import { useNavigate } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AddNote from "./components/AddNote";
import Categories from "./components/Categories";
import EditNote from "./components/EditNote";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-note" element={<AddNote />} />
                <Route path="/category" element={<Categories />} />
                <Route path="/edit-note/:id" element={<EditNote />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
