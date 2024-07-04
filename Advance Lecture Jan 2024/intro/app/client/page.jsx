"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";

const ClientPage = () => {
  const [catFact, setCatFact ] = useState("")
  useEffect(() => {
    axios.get("https://catfact.ninja/fact")
    .then(({data}) => {
      setCatFact(data.fact)
    })
  }, [])
  return (
    <div>
      <h1>Client Page</h1>
      {catFact && <h1>{catFact}</h1>}
    </div>
  )
};

export default ClientPage;
