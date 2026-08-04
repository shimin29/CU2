import { useState, useEffect } from "react";
const SessionStorageArrays = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        // If you want to store an array in sessionStorage, you cannot store it directly.
        // You MUST convert it to JSON first, with JSON.stringify
        const fruitsArray = ["Apple", "Banana", "Orange"];
        // sessionStorage.setItem('fruits', fruitsArray) // <- CANNOT
        sessionStorage.setItem("fruits", JSON.stringify(fruitsArray)); // <- CANNOT

        // Use JSON.parse to retrieve and decode from JSON.
        const storedFruits = JSON.parse(sessionStorage.getItem("fruits"));
        setFruits(storedFruits);

        // If you are curious, use console.log to see what is the JSON and what happens
        // After you decode it with JSON.parse.
        console.log("Raw Fruits from sessionStorage");
        console.log(sessionStorage.getItem("fruits"));
        console.log(typeof sessionStorage.getItem("fruits"));
        console.log("After JSON.parse from sessionStorage");
        console.log(storedFruits);
        console.log(typeof storedFruits);

        // Removing specific item
        sessionStorage.removeItem(fruits);
        console.log(sessionStorage.getItem("fruits")); // <- will return null since you removed it

        // Clear all items
        sessionStorage.clear();
    }, []);

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};

export default SessionStorageArrays;
