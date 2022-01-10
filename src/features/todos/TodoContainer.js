import React from "react";
import {useSelector} from "react-redux"
import Todo from "./Todo";

function TodoContainer() {
  const todos=useSelector((state=>state.todos.entities))
  return <div>
    {todos.map((todo,index)=><Todo key={index} text={todo}></Todo>)}
  </div>
}

export default TodoContainer;
