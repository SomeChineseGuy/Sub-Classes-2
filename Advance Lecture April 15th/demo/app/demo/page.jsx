import React from "react";
import axios from 'axios';
import Counter from "@/components/Counter";

const getData  = async () => {
  // Go out and get data, I want to wait for that data to come and then do something with that data
  const {data} = await axios.get('https://dog.ceo/api/breeds/image/random');
  // db.query('SELECT * FROM USERS');
  return data;
}

const DemoPage = async ()  => {
  const apiData = await getData();
  console.log(apiData);
  return (
    <div className="font-bold text-center">
      <h1 className="text-5xl font-bold text-center mb-10">Demo!</h1>
      <Counter />
      <img src={apiData.message} alt="" />

    </div>
  )
};

export default DemoPage;


/*
  app.get('/demo' (req,res) async => {
    // Make a DB request
    // Send that db request to the front
    const {data} = await axios.get('https://dog.ceo/api/breeds/image/random');
    
    res.render('demo', templateVars)  
  })

*/