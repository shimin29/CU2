import { useState, useEffect } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    const [oneMoreCount, setOneMoreCount] = useState(0);
    
    // Alternative they call it side effects.
    useEffect(() => {
        // The code basically runs whenever a useState variable is changed.
        // Update the document title
        document.title = `You clicked me ${count} times`;
        console.log(`You clicked me ${count} times`);
    }); // This is what we call no dependency array
    // Meaning it will run every time ANY useState variable detected change.

    useEffect(() => {
        console.log("I am only detecting changes for count variable");
        console.log(`Count was clicked ${count} times`);
    }, [count]); // <- That's your dependency array
    // Wrap it in square brackets as if it's an array.

    useEffect(() => {
        console.log("This useEffect will ONLY run on the first load");
        console.log("No matter what variables changes, I will not display this message again");
    }, []); // <- Put an empty dependency array after the curly brackets 这个是在on page load 好用 只load 一次
    // REMEMBER!!!!!! to put your "," (comma) 记得放逗号 “，”

    useEffect(() => {
        console.log("This useEffect will only run IF")
        console.log("count, or oneMoreCount detected any changes")
        console.log("Basically a useEffect can detect more than one useState variable change in the dependency array.")
    }, [count, oneMoreCount]) //<- Put both count and oneMoreCount
    // In the dependency array to detect changes for both

    return (
        <div className="d-flex justify-content-center">
            <p>You clicked {count} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>You clicked The other {anotherCount} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setAnotherCount(anotherCount + 1)}>
                Click me another
            </button>
            <p>You clicked One More Count {oneMoreCount} times</p>
            <button className="btn btn-primary ml-3" onClick={() => setOneMoreCount(oneMoreCount + 1)}>
                Click me One More Count
            </button>
        </div>
    );
};

export default Example;
