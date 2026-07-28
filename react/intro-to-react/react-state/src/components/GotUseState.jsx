import { useState } from "react";

const GotUseState = () => {
    const [name, setName] = useState("")

    const submit = () => {
        console.log(name);
    };
    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={submit}>Submit</button>
            <h1>{name}</h1>
        </>
    );
};

export default GotUseState;
