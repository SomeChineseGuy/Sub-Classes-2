import Counter from "@/components/Counter";
import Fetch from "@/components/Fetch";
import React from "react";

const DemoClient = () => {

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-10">Demo Client!</h1>
      <Counter />
      <Fetch />
    </div>
  )
};

export default DemoClient;
