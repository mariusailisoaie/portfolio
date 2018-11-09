import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { content: 'Walk the dog', id: 1 },
      { content: 'Wash the car', id: 2 },
      { content: 'Buy milk', id: 3 }
    ]
  }
  addTodo = todo => {
    todo.id = this.state.todos.length + 1;

    console.log(todo);

    const todos = [...this.state.todos, todo];

    this.setState({
      todos
    })
  }

  deleteTodo = id => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo app ReactJS</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
