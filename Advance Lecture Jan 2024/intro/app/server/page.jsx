import React from "react";
import axios from "axios";
import Counter from "@/components/Counter";
import Form from "@/components/Form";

const getCatFact = async () => {
  const catFact = await axios.get('https://catfact.ninja/fact');
  console.log();
  return catFact.data.fact;
}

const ServerPage = async () => {
  const fact = await getCatFact()
  return (
    <div>
      <h1>This is the server page!</h1>
      {/* <p>{fact}</p>
      <Counter /> */}
      <Form />
    </div>
  )
};

export default ServerPage;


/*
  app.get('/urls', (req, res) => {
    // make a db request
    const user = await db.query("SELECT * FROM USERS")

    res.render('urls', user)
  })




*/