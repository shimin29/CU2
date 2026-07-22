import TodoItem from "./TodoItem"
function TodoList(){
    return(
        <ul className="list-group">
          <TodoItem task_name="Task 1" task_done={true}/>
          <TodoItem task_name="Task 2" task_done={false}/>
          <TodoItem task_name="Task 3" task_done={false}/>
        </ul>
    )
}

export default TodoList