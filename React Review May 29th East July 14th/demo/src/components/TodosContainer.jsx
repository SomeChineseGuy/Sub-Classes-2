import React from "react";
import TodoItems from "./TodoItems";

const TodosContainer = (props) => {
  
  return (
    <div>
      {props.todos.map((todo, idx) => {
        return <TodoItems key={idx} todo={todo} setTodos={props.setTodos}/>
      })}

    </div>
  )
};

export default TodosContainer;
