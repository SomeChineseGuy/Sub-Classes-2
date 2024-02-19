import './App.css';
import Header from './Components/Header'
import Parent from './Components/Parent';

// const Component = require('./Components/Header')

// Component.Header()
// Component.HeaderWithBody()

const nameArr = ["Sarah", "Tina", "Bob"]
//  [<p>"Sarah"</p>, <p>"Tina"</p>, <p>"Bob"</p>]

const printNames = (arr) => {
  return arr.map((name, idx) => {
    return (
      <div key={idx}>
        <p>{name}</p>
      </div>
    )
  })
}

function App() {
  return (
    <div className="App"> 
      <h1>Main Component</h1>
      {/* <Header username="Linda" id={8} />
      <Header username="Sarah" id={9} /> */}
      {nameArr.map((name, idx) => {
        return <Header key={idx} username={name} id={idx} />
      })}
      {printNames(nameArr)}

      <Parent nameArr={nameArr} printNames={printNames} />


    </div>
  );
}

export default App;
