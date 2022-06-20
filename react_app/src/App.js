
import { useState,useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
const [todos, setTodos] = useState([]);
  
const todonameRef =useRef();

const handleAddTodo = (e) => {
  //タスクを追加
  const name = todonameRef.current.value;
  if(name ==="") return;
  setTodos((prevTodos) => {
  return [...prevTodos, { id:uuidv4(), name:name, completed:false}];
 
  });
  todonameRef.current.value = null;
};

const aToDo = (id) => {
   
  const aaa = [...todos];
  const todo = aaa.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  setTodos(aaa);
};

const handleClear = () => {
const newTodos = todos.filter((todo) => !todo.completed);
setTodos(newTodos);

};

return (
  <>
    {/* DVVタグか、<>JXフラグメントを入れないといかえない */}
    <TodoList todos={todos} aToDo={aToDo} />
    <input type="text" ref={todonameRef}/>
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button onClick={handleClear}>完了したタスクの削除</button>
    <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
  </>
  );
}

export default App;
