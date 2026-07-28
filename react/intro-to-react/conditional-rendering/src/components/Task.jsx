const Task = ({ task, isDone, onToggle }) => {
    return (
        <div className="d-flex align-items-center my-2">
            <input type="checkbox" className="me-3" checked={isDone} readOnly onClick={onToggle} />
            <span className={isDone ? "text-decoration-line-through" : ""}>{task}</span>
        </div>
    );
};

export default Task;
