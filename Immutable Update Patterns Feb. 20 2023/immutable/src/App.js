import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Pizza from './components/Pizza';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Immutable Patterns!</h1>
      {/* <Counter username="Joe" /> */}
      <Pizza />
    </div>
  );
}

export default App;
