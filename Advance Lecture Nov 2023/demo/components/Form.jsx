"use client"

import React, {useState} from "react";
import axios from "axios";

const Form = () => {
  const [input, setInput ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    axios.post('http://localhost:3000/api/users', {input}).then((res) =>{
      console.log(res);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="border-solid	border-2" type="text" onChange={(e) => setInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Form;


// useEffect(( )=> {
// axios.get('localhost:8080')
// })