import React from "react"

const TodoFormContainer = (props) => {
const {todoItem ,setTodoItem ,submitForm}=props;
const ChangeInputHandeler = (inputName , value) =>{
  console.log(inputName,value);
if(inputName==="todo-title"){
    setTodoItem({...todoItem, title:value})

}else if (inputName==="todo-due-date"){
    setTodoItem({...todoItem, dueDate:value})
}
}

const submitHandler = (e) =>{
    e.preventDefault();
    submitForm();
}
  return (
    <div className="row">

<form onSubmit={submitHandler}>
    
 <div>
    <label  htmlFor="todo-name">Todo Title</label>
    <input  onChange={(e)=> ChangeInputHandeler("todo-title", e.target.value)} value={todoItem.title} className="form-control" placeholder="Enter To-Do Text" type="text" id="todo-name" 
    name="todo-name"/>
</div>
<div>
<label  htmlFor="todo-due-date">Todo Due Date</label>
    <input   onChange={(e)=> ChangeInputHandeler("todo-due-date", e.target.value)} value={todoItem.dueDate} className="form-control" type="date" id="todo-due-date" 
    name="todo-due-date"/>
</div>
<div className="d-grid my-4">
  <button type="submit" className="btn btn-primary" >{todoItem.id > 0 ? "Edit Todo" :"Add Todo" } </button>
</div>
</form>
</div>
  )
}

export default TodoFormContainer