import { useState } from "react";

const Counter = ({username}) => {
  const [count, setCount] = useState(0);
  console.log(count);
  
  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // num, string, boolean

    setCount((prev) => {
      console.log(prev)
      return prev + 1
    });
    setCount((prev) => {
      console.log(prev)
      return prev + 1
    });
    setCount((prev) => {
      console.log(prev)
      return prev + 1
    });
  }
  
  return (
    <div>
      <h1>This is the counter component</h1>
      <h1>The username is: {username}</h1>
      <h4>The count is: {count}</h4>
      {/* <h4>The count is: {num}</h4> */}
      <button onClick={increment}>Click me!</button>
    </div>
  );
};


export default Counter;