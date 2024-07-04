import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST (req) {
  // req.body.input
  const {input} = await req.json();
  if(input === "dogs") {
    const dogImage = await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(dogImage.data.message);
    return NextResponse.json({data: dogImage.data.message})
  }

  if(input === "cats") {
    const catFacts = await axios.get("https://catfact.ninja/fact")
    console.log(catFacts.data.fact);
    return NextResponse.json({data: catFacts.data.fact})
  }

  return NextResponse.json({data: "Does this work?"})
}


