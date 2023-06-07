import React from 'react'
import Todo from './todo'

const Todoliste = ({ todos, checkTodo, deleteTodo}) => {

  return (
    <div>
        {todos.map(todo => (
            <Todo key={todo.id} title={todo.title}  id={todo.id} isCompleted={todo.isCompleted} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
        ))}
      
    </div>
  )
}

export default Todoliste
