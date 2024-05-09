// app.get('/api/users', (req, res))
import axios from "axios";
import { NextResponse } from "next/server";


// app.post('/api/users')

export async function POST (req) {
  try {
    const body = await req.json()
    console.log(body);  
  } catch (err) {
    console.log(err);
  }
  
  // Connect to a database

  // insert data

  // send a response back
  //res.json({message: "nice work"})
  return NextResponse.json({message: "Nice work!"})
}

export async function GET () {
  // Connect to my database
  const {data} = await axios.get("https://dog.ceo/api/breeds/image/random")
  console.log(data);
  // send data from my database back to my front end
  return NextResponse.json({message: data.message}, {status: 201})
}