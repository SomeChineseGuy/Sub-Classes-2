import React, { useState } from "react";

const Pizza = () => {
  const [topping, setTopping] = useState('');
  // const [crustType, setCrustType] = useState('Normal');
  // const [selectedTopping, setSelectedTopping] = useState([]);
  const [pizza, setPizza] = useState({
    crustType: 'Normal',
    selectedTopping: []
  })
  
  const updateCrust = (e) => {
    // setCrustType(e.target.value)
    setPizza((prev) => {
      const newPizza = {
        ...prev,
        crustType: e.target.value
      }
      return newPizza
    })
  }

  const updateTopping = (e) => {
    setTopping(e.target.value)
  }

  const addTopping = () => {
    // setSelectedTopping((prev) => {
    //   const newArr = [...prev, topping]
    //   return newArr
    // })
    setPizza((prev) => {
      const newPizza = {
        ...prev,
        selectedTopping: [...prev.selectedTopping, topping]
      }
      return newPizza;
    })
  }
  
  const mappedTopping = pizza.selectedTopping.map((item, idx) => {
    return <p key={idx}>{item}</p>
  });

  // const arr = ['chicken', 'beef', 'beef']
  // [<p key="0">chicken</p>, <p>beef</p>]
  return (
    <div>
      <h1>Welcome to my pizza house! Not a hut!</h1>
      <h2>Create your own pizza!</h2>
      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <label htmlFor="Crust">New crust type:</label>
        <input type="text" onChange={updateCrust} value={pizza.crustType}/>
      </div>
      <div>
        <label htmlFor="Topping">New Topping:</label>
        <input type="text" onChange={updateTopping} value={topping}/>
        <button onClick={addTopping}>Add Topping</button>
      </div>
      {mappedTopping}
    </div>
  )
};

export default Pizza;
