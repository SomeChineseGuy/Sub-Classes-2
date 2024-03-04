"use client"

import axios from "axios";
import React, {useState} from "react";

const Form = () => {
  const [input, setInput ] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }  

  const handleClick = (e) => {
    e.preventDefault();
    axios.post('/api/users', {data: input}).then((res) => {
      console.log(res);
    })
  }

  return (
    <div>
      <label htmlFor="">Add your user here!</label>
      <input type="text" className="border-2 border-black" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
};

export default Form;
