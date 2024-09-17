import TodoItgemComponent from "./TodoItgemComponent";
const TodoListComponent = (props) => {
    const { title , todolist ,deletetodo ,changestatuse ,setTodo} = props ;
  return (
    <div className="row">
    <h3 className="mt-4">
    {title}
    </h3>
    <ul className="list-group">

{/* {TODO_DUMMY_DATA.filter(filteredTodo => !filteredTodo.completed).map(todo => (
     <TodoItgemComponent todo={todo}/>
))} */}

 {todolist.map(todo => (
     <TodoItgemComponent setTodo={setTodo}  changestatuse={changestatuse} deletetodo={deletetodo} key={todo.id} todo={todo}/>
))}


    {/* <TodoItgemComponent todo={}/>
    <TodoItgemComponent todo={}/>
    <TodoItgemComponent todo={}/> */}



        {/* <li className="list-group-item">
        <div>
            <span>1. Task one - 2024-12-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Complete</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
   
        </li> */}
        
        {/* <li className="list-group-item">
        <div>
            <span>2. Task Tow - 2024-10-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Complete</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
       
        </li>
        <li className="list-group-item">
        <div>
            <span>3. Task Three - 2024-5-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Complete</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
        
        </li> */}
    </ul>
</div>
  )
}

export default TodoListComponent