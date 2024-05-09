import React from "react";
import axios from "axios";
import Counter from "@/components/Counter";
import Form from "@/components/Form";


// Returning a promise
const getDogPic = async () => {
  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(data);
  return data
}

const ServerPage = async () => {
  const dogData = await getDogPic()
  console.log(dogData);
  return (
    <div>
      <h1>Welcome to my server page!</h1>
      <img src={dogData.message} />
      <Counter />
      <Form />
    </div>
  )
};

export default ServerPage;


/*
app.get('/about/', (req, res) async => {
  const { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
  const templateVars = { data }
  res.render('about', templateVars)
})
*/