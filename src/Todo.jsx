import React from 'react'

function Todo({todo}) {
  return (
    <div className='todo'>
      <div className='task'>
        <input type='checkbox' />
        <p>{todo}</p>
      </div>
        <button>Delete</button>
    </div>
  )
}

export default Todo
