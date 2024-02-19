import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Parent from './components/Parent'

const listOfNames = ['Alvin', "Ryan", 'Sarah', "Joe"]
//const arr = [<p>'Alvin'</p>, <p>"Ryan"</p>, 'Sarah', "Joe"]

const displayListOfNames = (namesArr) => {
  return namesArr.map((name, idx) => {
    return <Header username={name} id={idx} key={idx} />
  })
}

function App() {
  return (
    <div className="App">

      <Parent listOfNames={listOfNames} displayListOfNames={displayListOfNames} />

      {/* <Header username="Alvin" id={10} />
      <Header username="Dave" id={1} />
      <Header username="Steve" id={12} />
      <Header username="Stacy" id={13} /> */}
      {/* {arr.map((name, idx) => {
        return (
          <div key={idx}>
            <Header username={name} id={idx}  />
          </div>
        )
      })}
      {listOfNames(arr)} */}

      {/* {arr.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })} */}

    </div>
  );
}

export default App;
