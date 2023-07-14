import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TodosContainer from './components/TodosContainer';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Sleep in",
      isCompleted: true
    },
    {
      id: 2,
      task: "Make sure I still have a job here",
      isCompleted: false      
    }
  ])


  return (
    <div className="App">
      <Header todos={todos} />
      <TodosContainer todos={todos} setTodos={setTodos}/>
      
    </div>
  );
}

export default App;
