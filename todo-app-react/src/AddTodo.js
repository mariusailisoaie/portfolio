import React , { Component } from 'react';

class AddTodo extends Component {
  state = {
    content: null
  }

  updateTodo = (e) => {
    this.setState({
      content: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);

    this.setState({
      content: null
    });

    document.getElementById('task').value = '';
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="task">Add task</label>
          <input onChange={ this.updateTodo } type="text" id="task"/>
        </form>
      </div>
    )
  }
}

export default AddTodo;