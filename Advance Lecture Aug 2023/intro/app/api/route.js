// http://localhost:3000/api
import { NextResponse } from "next/server";
export function GET(req) {

  return NextResponse.json({message: "This is a GET REquest"}, {status: 200})
  // res.json({message: "You got it!", {status: 200}})
}
