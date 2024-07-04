"use client"

import React, { useState } from "react";
import axios from 'axios'

const Form = () => {

  const [input, setInput ] = useState("")

  const submitForm = (e) => {
    e.preventDefault();
    axios.post('/api/animals', {input: input})
    .then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="p-10">
      <h1>This is a Form - {input}</h1>
      <form action="/" onSubmit={submitForm}>
        <input type="text" value={input} className="border-2 border-red-100" onChange={e => setInput(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default Form;
