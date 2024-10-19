import React, { useState, useRef, useEffect } from 'react';
import {v4} from 'uuid'
import './App.css';
import TodoList from './TodoList';

function App() {
//display stored todos
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  //save todos
  useEffect(() =>{
    localStorage.setItem("ITEM", JSON.stringify(todos)) 
  }, [todos])

  //access the input
  const todoName = useRef()

  function addTodo(e) {
    const name = todoName.current.value
    if (name === '') return
    
    //useState to track change in our array
    setTodos(prevTodos =>{
      return [...prevTodos, {id: v4(), name: name, complete: false}]
    })
    //set input value to null
    todoName.current.value= null
  }
  
  //toggle todo if completed
  function markTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  //delete todo
  function deleteTodo(id) {
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
      <h2>Todo List</h2>
      <div className='addTodo'>
        <input ref={todoName} type='text' placeholder='Type task here...'/>
        <button className='addBtn' onClick={addTodo}>Add Task</button>
      </div>
        <TodoList todos={todos} markTodo={markTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
