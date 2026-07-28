import TodoItem from "./TodoItem";

function TodoList({ todos, toggleIsCompleted, deleteTodo }) {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem key={todo.id} task_id={todo.id} task_name={todo.label} task_done={todo.isCompleted} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
