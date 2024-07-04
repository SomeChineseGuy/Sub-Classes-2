import { NextResponse } from "next/server";


export function GET () {
  return NextResponse.json({data: "Some cool stuff"})
}