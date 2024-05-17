import React, { useEffect, useRef, useState } from "react";
import axios from "axios"

const TodoContainer = () => {
  const [todos, setTodos ] = useState([]);
  const [input, setInput ] = useState("");
  const inputRef = useRef("")

  // make an API call to my server
  // and get the data to write on my site
  useEffect(() => {
    axios.get("http://localhost:8080/todos").then(({data}) => {
      setTodos(data)
    })
  },[])

  const handleClick = (id) => {
    axios.post(`http://localhost:8080/todos/${id}/checkoff`)
      .then(({data}) => {
        setTodos(data)
      })
  }

  const handleDelete = (id) => {
    axios.post(`http://localhost:8080/todos/${id}/delete`)
      .then(({data}) => {
        setTodos(data)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/todos/add/${inputRef.current.value}`)
      .then(({data}) => {
        setTodos(data)
      })
  }

  const totalItem = todos.length;
  const unFinishedItemNumber = todos.reduce((acc, todo) => {
    if(todo.done) {
      acc += 1
    }
    return acc
  }, 0)


  return (
    <div>
      <h1>Welcome to my Todo List {totalItem === 0 ? 0 : `${unFinishedItemNumber}/${totalItem}`}</h1>
      {todos.map(({id, task, done}) => (
        <div key={id} >
          <p onClick={() => handleClick(id)}>{task} {done ? "✅" : "🟩" }</p>
          <button onClick={() => handleDelete(id)}>Delete</button>   
        </div>
      ))}
      <h2>Add a new Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}/>
        <button>Add</button>
      </form>
    </div>
  )
};

export default TodoContainer;


// 3 - phone
// In person - 