// http://localhost:3000/api/users
// Get
// POST
// PUT
// DELETE
// PATCH

import { NextResponse } from "next/server";

export function GET(req) {

  return NextResponse.json({message: "This is a GET REquest"}, {status: 200})
  // res.json({message: "You got it!", {status: 200}})
}

export async function POST(req) {
  const {data} = await req.json();
  console.log(data);
  return NextResponse.json({message: "POSTTTTTTT"}, {status: 200})
}

// app.get('/urls', (req, res))