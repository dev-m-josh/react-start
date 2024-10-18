import { useState } from 'react';
import './App.css';
import Todos from './Todos';

function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className='addTodo'>
        <input type='text' placeholder='Type task here...'/>
        <button className='addBtn'>Add Task</button>
      </div>
      <Todos />
    </div>
  );
}

export default App;
