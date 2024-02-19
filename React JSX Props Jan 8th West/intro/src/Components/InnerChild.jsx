import React from "react";

const InnerChild = (props) => {
  return (
    <div>
      <h1>Inner Child</h1>
      {props.printNames(props.newNamesArr)}
    </div>
  )
};

export default InnerChild;
