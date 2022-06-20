import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, aToDo }) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} aToDo={aToDo} />)
};

export default TodoList;
