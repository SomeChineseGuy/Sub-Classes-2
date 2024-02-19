import Child from "./Child";
import './Parent.css'

const Parent = (props) => {
  console.log(props)
  return (
    <div className="inner">
      <h1>This is the parent!</h1>
      {/* {props.displayNames(props.names)} */}

      <Child displayListOfNames={props.displayListOfNames} listOfNames={props.listOfNames} />
    </div>
  )
}

export default Parent;