import React from "react";

const AllCars = ({params}) => {
  
  return (
    <div>
      <h1>Welcome to all the cars! {params.id} </h1>
    </div>
  )
};

export default AllCars;


/*
  app.get('/cars/:somethingcool', (req,res) => {
    .params.somethingcool
  })
*/