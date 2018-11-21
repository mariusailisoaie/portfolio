import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  render() {
    const { authStatus } = this.props;
    if(!authStatus.uid) return <Redirect to='signin'/>

    return (
      <div className="container">
      <h5 className="grey-text text-darken-3">Create New Project</h5>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-field">
            <button className="btn teal darken-2 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);