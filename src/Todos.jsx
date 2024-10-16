
import todolist from './todolist';

import React from 'react'

export default function Todos() {
  return (
    <div>
        {todolist.map(todo=>{
            return todo.task
        })}
    </div>
  )
}
