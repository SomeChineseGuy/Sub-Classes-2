"use client"
import React, {useState, useEffect} from "react";
import axios from "axios";

const ClientPage = () => {
  const [url, setUrl ] = useState("")
  useEffect(() => {
    axios.get('/api/users').then(({data}) => {
      console.log(data.message);
      setUrl(data.message)
    })
  }, [])
  return (
    <div>
      <h1>Welcome to my Client Page!</h1>
      {url ? <img src={url} /> : <p>Loading</p>}
    </div>
  )
};

export default ClientPage;
