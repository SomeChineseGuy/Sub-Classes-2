import React, {useState} from "react";

const Counter = (props) => {
  console.log(props);
  const increment = () => props.setCounter(props.counter + 1);
  const decrement = () => props.setCounter(props.counter - 1);
  return (
    <div>
      <h1>The count is {props.counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Counter;