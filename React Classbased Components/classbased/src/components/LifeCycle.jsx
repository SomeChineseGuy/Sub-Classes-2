import { Component } from "react";
import axios from 'axios';

class LifeCycle extends Component {
  constructor() {
    super()
    this.state = {
      fact: ""
    }
  }

  componentDidMount() {
    // useEffect(() => {}, [])
    console.log("Component did Mount!")
    axios.get("https://catfact.ninja/fact")
      .then((res) => {
        console.log(res.data.fact);
        this.setState({
          fact: res.data.fact
        })
      })
  }

  componentDidUpdate() {
    // useEffect(() => {}, [state])
    console.log('Component did update!');
    // Never update state in here!
    // this.setState({
    //   fact: "something"
    // })
  }

  componentWillUnmount() {
      /*
      useEffect(() => {
        return {

        }
        // component unmounts
      }, [])
    */
   console.log("Component did Unmount!");
  }

  

  render() {
    console.log("Inside the render")

    // useEffect(() => {}) calls whenever components inital render, re-renders
    // useEffect(() => {}, []) Only in initial render
    // useEffect(() => {}, [state]) initial render and whenever state updates
    /*
      useEffect(() => {
        return {

        }
        // component unmounts
      }, [])
    */

    return (
      <div>
        <h1>Life Cycle</h1>
        {this.state.fact && this.state.fact}
      </div>
    )
  }
}

export default LifeCycle;