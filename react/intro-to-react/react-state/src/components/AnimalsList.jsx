import { useState } from "react";

const AnimalsList = () => {
    // Your useState variables
    const [animals, setAnimals] = useState([]);
    const [animalEntry, setAnimalEntry] = useState("");

    //Function to add animal into list
    const addAnimal = () => {
        console.log(animalEntry);
        setAnimals([...animals, animalEntry]);
        setAnimalEntry("");
    };

    return (
        <>
            <ul>
                {/* To display the list */}
                {animals.map((animal, key) => (
                    <li key={key}>{animal}</li>
                ))}
            </ul>
            {/* The input text box */}
            <input type="text" value={animalEntry} onChange={(event) => setAnimalEntry(event.target.value)} />
            {/* The button to add animal to the list  */}
            <button onClick={addAnimal}>Add Animal</button>
        </>
    );
};

export default AnimalsList;
