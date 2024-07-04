/*
  app.get('/urls', (req, res) => {
    // Get all users from the DB and send it to the front end
    const user = await db.query("SELECT * FROM USERS")
    res.send(user)
  }) 

    app.post('/urls', (req, res) => {
      // Get all users from the DB and send it to the front end
      const user = await db.query("SELECT * FROM USERS")
      res.send(user)
    }) 
*/ 

import { NextResponse } from "next/server";

export function GET (req) {

  // res.json({message: "Can you see this?"})
  return NextResponse.json({message: "Can you see this?"})

}

export function POST(req) {
  return NextResponse.json({message: "This is a POST REQUEST"})
}