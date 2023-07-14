const Counter = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.num}</p>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

export default Counter;