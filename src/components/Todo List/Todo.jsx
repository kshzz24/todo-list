import React, { useState } from 'react'
import './Todo.css';
function Todo() {
   const [todos, setTodos] = useState([]);

    const handleEvent = (event) =>{
      event.preventDefault();
      let itemName = event.target.elements.todo.value;
      setTodos([...todos, itemName]);
      event.target.reset();
    };

   const handleDone = (index) =>{
      let newTodo = [...todos];
      newTodo[index] = '✓ '+ newTodo[index];
      setTodos(newTodo);
   }


    const handleDelete = (index) =>{
       let newTodo = [...todos];
       newTodo.splice(index, 1);
       setTodos(newTodo); 
     }

  return (



    <div className="todo-list">
       <div className="heading">
        <h1>Todo List</h1> 
        <form onSubmit={handleEvent}>
          <input type="text" name="todo" placeholder="Enter Your Task Please" />
           <button type="submit" className="add">Add</button>
        </form>
       </div>
       {
         todos.map((listItem, index) =>(
          <div className="list-container">
          <div className="item" key={index}>
            <span><p>{listItem}</p></span>
            <button className="done" onClick={()=> handleDone(index)} >Done</button>
            <button className="delete" onClick={ ()=>handleDelete(index)}>Delete</button>
          </div>
      </div>
         )
        )
       }
       
    </div>
  )
}

export default Todo;