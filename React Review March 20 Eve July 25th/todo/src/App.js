import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';

function App() {
  const [counter, setCounter] = useState(0);

  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'Sleep in',
      isCompleted: true
    },
    {
      id:2,
      task: 'Beg manager not to fire me',
      isCompleted: false
    }
  ]);
  
  return (
    <div className="App">
      <Header todos={todos} />
      <TodoContainer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
