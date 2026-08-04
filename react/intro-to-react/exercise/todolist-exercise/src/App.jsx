import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./Todolist";

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");

        return savedTodos
            ? JSON.parse(savedTodos)
            : [
                  {
                      id: 1,
                      label: "Task 1",
                      isCompleted: true,
                  },
                  {
                      id: 2,
                      label: "Task 2",
                      isCompleted: false,
                  },
                  {
                      id: 3,
                      label: "Task 3",
                      isCompleted: false,
                  },
              ];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const toggleIsCompleted = (taskId) => {
        setTodos(todos.map((todo) => (todo.id === taskId ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    };

    const addToDo = (label) => {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                label: label,
                isCompleted: false,
            },
        ]);
    };

    return (
        <>
            <div className="card rounded shadow-sm" style={{ maxWidth: "500px", margin: "60px auto" }}>
                <div className="card-body">
                    <h3 className="card-title mb-3">My Todo List</h3>
                    <TodoList todos={todos} toggleIsCompleted={toggleIsCompleted} deleteTodo={deleteTodo} />
                    <AddTodoForm addToDo={addToDo} />
                </div>
            </div>
        </>
    );
}

export default App;
