const sayHello = (props) => {

  return `Hello ${props.name}, you are ${props.age} old.`
}

console.log(sayHello({name: "Ryan", age: 20, isSleepy: true, favFoods: ["cheese", "Ham", "Bread"]})); 
