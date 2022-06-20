import React from 'react';


const Todo = ({ todo, aToDo }) => {
   const handleTodoclic = () => {

    aToDo(todo.id);
   };
  return (<div>
    <label>
      <input type="checkbox" 
              checked={todo.completed} 
              readonly 
              onChange={handleTodoclic}
              />
    </label>
    {todo.name}
    
    </div>
  );
};

export default Todo;
