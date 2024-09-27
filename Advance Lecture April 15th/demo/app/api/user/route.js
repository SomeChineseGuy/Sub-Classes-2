/* 
  app.post('/user/', (req, res)=> {
  
  })

  app.get('/user/', (req, res)=> {
  
  })

  app.put('/user/', (req, res)=> {
  
  })

  app.delete('/user/', (req, res)=> {
  
  })
*/

import axios from "axios";
import { NextResponse } from "next/server";
// res

export async function POST(req) {
  console.log('fire!')
  const body = await req.json();
  console.log(body.username);
  // res.json({data: "Hello"})

  return NextResponse.json({message: "Hello"}, {status: 200})

}

export function GET(req) {
  console.log('GET REQUEST!')

  // res.json({data: "Hello"})
  return NextResponse.json({
    info: "Something cool!"
  })
}