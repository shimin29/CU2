import { useState } from "react";

function AddTodoForm({ addToDo }) {
    const [label, setLabel] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo(label)
        setLabel("")
    }

    return (
        <div className="mt-4">
            <form className="d-flex justify-content-between align-items-center" onSubmit={handleSubmit}>
                <input type="text" className="form-control" placeholder="Add new item..."
                value={label} onChange={(e) => setLabel(e.target.value)} required />
                <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;