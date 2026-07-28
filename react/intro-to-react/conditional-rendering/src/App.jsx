import { useState } from "react";
import Task from "./components/Task";
import NoTasksFound from "./components/NoTasksFound";

function App() {
    const [taskInput, setTaskInput] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, text: "First Task", isDone: false },
        { id: 2, text: "Second Task", isDone: false },
    ]);
    const [filter, setFilter] = useState("all");

    const [isFormVisible, setIsFormVisible] = useState(true);

    const handleFilterChange = (newFilter) => {
        console.log(newFilter);
        setFilter(newFilter);
    };

    let displayedTasks;
    switch (filter) {
        case "done":
            displayedTasks = tasks.filter((task) => task.isDone);
            break;
        case "undone":
            displayedTasks = tasks.filter((task) => !task.isDone);
            break;
        default:
            displayedTasks = tasks;
    }

    const handleInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit task logic goes here
        setTasks([...tasks, { id: tasks.length + 1, text: taskInput, isDone: false }]);
        console.log(taskInput);
        setTaskInput("");
    };

    const toggleTaskStatus = (id) => {
        console.log(id);
        setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
    };

    return (
        <div className="container">
            <h1 className="text-center my-3 text-dark">Task Manager</h1>

            <button onClick={() => setIsFormVisible(!isFormVisible)} className="btn btn-secondary mb-3">
                {isFormVisible ? "Hide Form" : "Show Form"}
            </button>

            {isFormVisible && 
                (<form onSubmit={handleSubmit} className="mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Add a task..." value={taskInput} onChange={handleInputChange} />
                        <button className="btn btn-primary">Add Task</button>
                    </div>
                </form>)
            }

            <div className="d-flex justify-content-center mb-3">
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" onClick={() => handleFilterChange("all")}>
                        All
                    </button>
                    <button className="btn btn-success" onClick={() => handleFilterChange("done")}>
                        Done
                    </button>
                    <button className="btn btn-danger" onClick={() => handleFilterChange("undone")}>
                        Undone
                    </button>
                </div>
            </div>

            {/* Task components will go here */}
            {/* Ternary Operator */}
            {displayedTasks.length > 0 ?
            (displayedTasks.map((task) => (
                <Task key={task.id} task={task.text} isDone={task.isDone} onToggle={() => toggleTaskStatus(task.id)} />
            ))) : (
              <NoTasksFound />
            )
            }
        </div>
    );
}

export default App;
