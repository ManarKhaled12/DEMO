import TodoFormContainer from "./TodoFormContainer";
import TodoItgemComponent from "./TodoItgemComponent"
import TodoListComponent from "./TodoListComponent";
import {useState} from "react" ;

const TODO_DUMMY_DATA =[
    {id:1, title:"Task one" , dueDate: "2024-12-12" , completed:false },
    {id:2, title:"Task Tow" , dueDate: "2024-10-12" , completed:false },
    {id:3, title:"Task Three" , dueDate: "2024-5-12" , completed:false },
    {id:4, title:"Task four" , dueDate: "2024-11-12" , completed:true },
    {id:5, title:"Task five" , dueDate: "2024-9-12" , completed:true },
    {id:6, title:"Task six" , dueDate: "2024-5-12" , completed:true }
];

 const TODO_INITIAL_VALUE={id:0, title:"" , dueDate: "" , completed:false};

const TodoCotainerComponent = () => {

      

const [todoList , setTodoList]= useState(TODO_DUMMY_DATA);
const [todoObject , setTodoObject]= useState(TODO_INITIAL_VALUE);

const deleteTodoHandler =(todo)=> {
const modifideTodoList=todoList.filter(todoItem => todoItem.id !==todo.id);
setTodoList(modifideTodoList);
}

    const generateNextId= () =>{
      let  maxid =0 ;
       for (let index = 0; index < todoList.length; index++) {
        if(todoList[index].id > maxid){
            maxid =todoList[index].id;
        }
       }
       return++maxid;
    }
  
const SubmitTodoFormHandeler = () =>{
    if(todoObject.id !== 0){
const  modifideTodoList = todoList.map(todoItem => {
    if(todoItem.id ===todoObject.id){
        todoItem.title = todoObject.title;
        todoItem.dueDate=todoObject.dueDate;
    }
    return todoItem ;
});
setTodoList(modifideTodoList);
    }
    else{
        setTodoList([...todoList,{ ...todoObject, id:generateNextId() }]);
    }

    
    setTodoList([...todoList,{ ...todoObject, id:generateNextId() }]);
    setTodoObject(TODO_INITIAL_VALUE);
}

const changeTodoStatuseHandler = (todo)=>{
const modifideTodoList = todoList.map(todoItem => {
    if(todoItem.id==todo.id){
        todoItem.completed = !todoItem.completed;
    }
    return todoItem ;
});
setTodoList(modifideTodoList);
}
return(
    <div className="container">

  <TodoFormContainer  submitForm={SubmitTodoFormHandeler} todoItem={todoObject} setTodoItem={setTodoObject}/>

{/* <div className="row">
    <h3 className="mt-4">
        Pending Tasks
    </h3>


    <ul className="list-group">

{TODO_DUMMY_DATA.filter(filteredTodo => !filteredTodo.completed).map(todo => (
     <TodoItgemComponent todo={todo}/>
))}
    <TodoItgemComponent todo={}/>
    <TodoItgemComponent todo={}/>
    <TodoItgemComponent todo={}/>



        <li className="list-group-item">
        <div>
            <span>1. Task one - 2024-12-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Complete</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
   
        </li>
        
        <li className="list-group-item">
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
        
        </li>
    </ul>
</div> */}

<TodoListComponent setTodo={setTodoObject} changestatuse={changeTodoStatuseHandler} deletetodo={deleteTodoHandler} title=" Pending Tasks" todolist={todoList.filter(filteredTodo => 
    !filteredTodo.completed)} />

{/* <div className="row">
    <h3 className="mt-4">
        Completed Tasks
    </h3>
    <ul className="list-group">
    {TODO_DUMMY_DATA.filter(filteredTodo => filteredTodo.completed).map(todo => (
     <TodoItgemComponent todo={todo}/>
))}
    <TodoItgemComponent todo={}/>

    <TodoItgemComponent todo={}/>

    <TodoItgemComponent todo={}/>


        <li className="list-group-item">
        <div>
            <span>4. Task four - 2024-11-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Undo</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
   
        </li>
        <li className="list-group-item">
        <div>
            <span>5. Task five - 2024-9-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Undo</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
       
        </li>
        <li className="list-group-item">
        <div>
            <span>6. Task six - 2024-5-12</span>
            </div>
            <button className="btn btn-success btn-sm me-2">Undo</button>
            <button className="btn btn-warning btn-sm me-2">Edit</button>
            <button className="btn btn-danger btn-sm me-2">Delete</button>
        
        </li>
    </ul>
</div> */}


<TodoListComponent setTodo={setTodoObject} changestatuse={changeTodoStatuseHandler} deletetodo={deleteTodoHandler} title=" Completed Tasks" todolist={todoList.filter(filteredTodo =>
     filteredTodo.completed)} />
    </div>
)
}

export default TodoCotainerComponent 