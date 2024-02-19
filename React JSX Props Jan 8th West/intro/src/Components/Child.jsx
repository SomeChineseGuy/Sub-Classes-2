import React from "react";
import InnerChild from "./InnerChild";

const Child = (props) => {
  
  return (
    <div>
      <h1>Child</h1>
      {props.printNames(props.newNamesArr)}
      <InnerChild printNames={props.printNames} newNamesArr={props.newNamesArr} />
    </div>
  )
};

export default Child;
