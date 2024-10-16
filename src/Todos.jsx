
import todolist from './todolist';
import Todo from './Todo';

import React from 'react'

export default function Todos() {
    
  return (
    <div>
        {todolist.map(todo=>{
            return <Todo key={todo.id} todo={todo} />
        })}
    </div>
  )
}
