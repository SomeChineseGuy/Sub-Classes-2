import React from "react";

const TodoItem = (props) => {
  const handleClick = () => {
    props.setTodos((prev) => {
      const results = prev.map(ele => {
        if(ele.id === props.id) {
          return {
            ...ele,
            isCompleted: !ele.isCompleted
          }
        }
        return ele
      });
      return results
    });
  }
  return (
    <div onClick={handleClick}>
      <h1>{props.task} ({props.id}) {props.isCompleted ? '✅' : '🟩'}</h1>
    </div>
  )
};

export default TodoItem;