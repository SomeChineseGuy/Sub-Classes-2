import { Component } from "react";
import Counter from "./Counter";

class Classbased extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  // const increment = () => {}
  increment() {
    // this.state.counter + 1
    this.setState({
      counter: this.state.counter + 1
    })
  }

  sum(num1, num2) {
    return num1 + num2
  }

  decrement() { 
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h1>This is our classbased component</h1>
        <p>The count is {this.state.counter}</p>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
        <p>{this.props.message}</p>
        <Counter />
      </div>
    )
  }
}

export default Classbased