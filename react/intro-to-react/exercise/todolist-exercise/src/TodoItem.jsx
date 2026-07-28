function TodoItem({ task_id, task_name, task_done, toggleIsCompleted, deleteTodo }) {
    const handleToggleDone = (e) => {
        e.preventDefault();
        toggleIsCompleted(task_id);
    };

    const handleDeleteTodo = (e) => {
        e.preventDefault();
        deleteTodo(task_id);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <button className={`btn btn-sm ${task_done ? "btn-success" : "btn-light"}`} onClick={handleToggleDone}>
                    <i className={`bi ${task_done ? "bi-check-square" : "bi-square"}`}></i>
                </button>
                <span className={`ms-2 ${task_done ? "text-decoration-line-through" : ""}`}>{task_name}</span>
            </div>
            <div>
                <button className="btn btn-sm btn-danger" onClick={handleDeleteTodo}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
