"use client"
import React, { useState } from "react";

const Counter = ({params}) => {
  const [counter, setCounter ] = useState(0); 
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>The count is: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Counter;