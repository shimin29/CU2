import { useState, useEffect } from "react";
const LocalStorageArrays = () => {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        // If you want to store an array in localStorage, you cannot store it directly.
        // You MUST convert it to JSON first, with JSON.stringify
        const fruitsArray = ["Apple", "Banana", "Orange"];
        // localStorage.setItem('fruits', fruitsArray) // <- CANNOT
        localStorage.setItem("fruits", JSON.stringify(fruitsArray)); // <- CANNOT

        // Use JSON.parse to retrieve and decode from JSON.
        const storedFruits = JSON.parse(localStorage.getItem("fruits"));
        setFruits(storedFruits);

        // If you are curious, use console.log to see what is the JSON and what happens
        // After you decode it with JSON.parse.
        console.log("Raw Fruits from localStorage");
        console.log(localStorage.getItem("fruits"));
        console.log(typeof localStorage.getItem("fruits"));
        console.log("After JSON.parse from localStorage");
        console.log(storedFruits);
        console.log(typeof storedFruits);

        // Removing specific item
        localStorage.removeItem(fruits);
        console.log(localStorage.getItem("fruits")); // <- will return null since you removed it

        //Clear all items
        localStorage.clear();
    }, []);

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};

export default LocalStorageArrays;
