import logo from './logo.svg';
import './App.css';
import  Head  from './components/Head'
import Info from './components/Info';

const myName = "Alvin";

const sayHello = () => {
  return 'How are you?'
}

const Box = (props) => {
  return <p>Hello {props.name} and age is {props.num}</p>
}

const names = ["Steve", "Ryan", "Joe"];

const data = [
  {name: "Jess", age: 10, showComponent: true},
  {name: "Steve", age: 20, showComponent: true},
  {name: "Ryan", age: 30, showComponent: false},
  {name: "Leslie", age: 40, showComponent: true},
]

const showAllNames = (arr) => {
  return arr.map((singleName, idx) => {
    return (
      <p key={idx}>{singleName}</p>
    )
  })
}

function App() {
  return (
    <div className="App" id="Head">
      <h1 className='info'>Hello</h1>
      <p>Hello Everyone!</p>

      {/* <Head name="Steve" showComponent={true}  age={100} />
      <Head name="John"  showComponent={true} age={10} />
      <Head name="Jess"  showComponent={false} age={200} /> */}

      {data.map((user, idx) => {
        return (<Head name={user.name} key={idx} age={user.age} showComponent={user.showComponent} />)      
      })}
    
      {names.map((singleName, idx) => {
        console.log(idx);
        return (
          <section key={idx}>
           
            <p>{singleName}</p>
            
          </section>
        )
      })}
      {showAllNames(names)}

    </div>
  );
}

export default App;