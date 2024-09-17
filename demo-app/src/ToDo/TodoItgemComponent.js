const TodoItgemComponent = (props) => {

    const {todo , deletetodo,changestatuse,setTodo} = props;
  return (
    <li className="list-group-item">
        <div className={todo.completed ? "text-decoration-line-through " : "" }>
            <span>{todo.id}. {todo.title} - {todo.dueDate}</span>
            </div >
            <button onClick={()=> changestatuse(todo)} className="btn btn-success btn-sm me-2">{todo.completed ? "Undo" : "Complete"}</button>
            <button onClick={()=> setTodo(todo)} disabled={todo.completed } className="btn btn-warning btn-sm me-2">Edit</button>
            <button onClick={()=> deletetodo(todo)} disabled={todo.completed } className="btn btn-danger btn-sm me-2">Delete</button>
   
        </li>
  )
}

export default TodoItgemComponent