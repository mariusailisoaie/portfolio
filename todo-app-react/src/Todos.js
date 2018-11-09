import React from 'react';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div onClick={() => {deleteTodo(todo.id)}} className="todo center collection-item" key={ todo.id }>
          <p>{ todo.content }<i className="fas fa-times secondary-content"></i></p>
        </div>
      )
    })
  ) : <p className="center">No more tasks! Yay!</p>;

  return (
    <div className="todo-list collection">
      { todoList }
    </div>
  )
}

export default Todos;