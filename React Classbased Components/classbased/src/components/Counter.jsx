import {useState} from 'react'

function Counter(props) {
  const [counter, setCounter] = useState(0)
  const [something, setSomething] = useState("")
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  

  return (
    <div>
      <h1>This is the counter Component</h1>
      <p>The count is {counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <p>{props.message}</p>
    </div>
  )
}

export default Counter;