import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = (props) => {
  return (
    <div>

      {props.todos.map((todo) => {
        return (
          <TodoItem 
            id={todo.id} 
            isCompleted={todo.isCompleted} 
            task={todo.task} 
            key={todo.id} 
            setTodos={props.setTodos} 
          />
        )
      })}



      {/* {[
        <TodoItem id={id} isCompleted={isCompleted} task={task} />, 
        <TodoItem id={id} isCompleted={isCompleted} task={task} />, 
        <TodoItem id={id} isCompleted={isCompleted} task={task} />
      ]} */}
      
    </div>
  )
};

export default TodoContainer;
