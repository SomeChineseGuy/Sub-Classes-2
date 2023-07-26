import React from "react";

const Header = (props) => {
  const todoAmount = props.todos.length;
  const todoCompleted = props.todos.filter(eachElementInToDos => eachElementInToDos.isCompleted)
  const totalCompleted = todoCompleted.length
  return (
    <header className="header">
      <nav>
        <div className="left">
          <h1>Super Smart Todo List</h1>
        </div>
        <div className="right">
          <h2>You've completed {totalCompleted}/{todoAmount} items on your list </h2>
        </div>
      </nav>
    </header>
  )
};

export default Header;