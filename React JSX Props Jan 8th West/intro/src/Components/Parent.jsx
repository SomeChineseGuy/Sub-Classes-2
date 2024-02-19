import Child from "./Child";

const Parent = (props) => {
  
  return (
    <div>
      <h1>Parent</h1>
      <Child newNamesArr={props.nameArr} printNames={props.printNames}  />
      
    </div>
  )
}

export default Parent;