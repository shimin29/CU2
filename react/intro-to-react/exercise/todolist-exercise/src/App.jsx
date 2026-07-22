import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"

function App(){
  return(
    <>
     <div className="card rounded shadow-sm"
      style={{maxWidth: "500px", margin:" 60px auto"}}>
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList/>
        <AddTodoForm/>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  )
}
 
export default App