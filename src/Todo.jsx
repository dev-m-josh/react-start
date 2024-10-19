import React from 'react'

export default function Todo({todo, markTodo, deleteTodo}) {
    function checkClick() {
        markTodo(todo.id)
    }
  return (
    <div className='todos'>
        <label className='label'>
            <input type='checkbox' checked={todo.complete} onChange={checkClick} />
            <p>{todo.name}</p>
        </label>
        <button onClick={() =>deleteTodo(todo.id)}>Delete </button>
    </div>
  )
}

