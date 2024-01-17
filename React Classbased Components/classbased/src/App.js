import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Classbased from './components/Classbased';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Classbased message="Did you get this?" /> */}
      <LifeCycle />
    </div>
  );
}

export default App;
