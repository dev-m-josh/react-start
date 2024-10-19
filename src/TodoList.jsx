import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, markTodo, deleteTodo}) {
  return (
    todos.map(todo =>{
        return (
        <Todo key={todo.id} todo={todo} markTodo={markTodo} deleteTodo={deleteTodo} />
        )
    })
  )
}
