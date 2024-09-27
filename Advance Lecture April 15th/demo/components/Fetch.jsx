"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, setData ] = useState("")
  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/user')
  //   .then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  const handleSubmit  = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/api/user',{username: data})
    console.log(res);
  }

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-10">Fetch Data!</h1>    
      {/* <img src={data} alt="" /> */}
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        <button>Submit!</button>
      </form>
      <p>Message: {data}</p>
    </div>
  )
};

export default Fetch;

/*
app.post('/users', (req, res) => {
  console.log(req.body)
})

*/