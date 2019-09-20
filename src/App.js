import React, { Component } from 'react';
import PostForm from './Components/PostForm';
import AllPosts from './Components/AllPosts';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: {
        description: "",
        id: new Date().valueOf(),
        priority: "",
        schedule: new Date(),
        taskTitle: ""
      }
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      tasks: {
        ...this.state.tasks,
        [e.target.name]: e.target.value
      }
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const d = new Date(),
      tasks = {
        description: "",
        id: new Date().valueOf(),
        priority: "",
        // schedule: (d.getFullYear() + "-" +(d.getMonth() + 1) + "-" + d.getDate()),
        schedule: (d.getFullYear() + "-" +(d.getMonth() + 1) + "-" + d.getDate()),
        taskTitle: ""
      }
    this.props.dispatch({
      type: 'ADD_TASKS',
      data: this.state.tasks
    })
    console.log("B RESET STATE=>", this.state);

    // this.props.dispatch({
    //   type: 'RESET_FORM',
    //   data: tasks
    // })
    console.log("A RESET STATE=>", this.state);
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <PostForm form={this.state.tasks} change={this.handleChange} submit={this.handleSubmit} />
          <AllPosts tasks={this.props.tasks} />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log("State==Data=->",state);
  return {
    tasks: state
  }
}
export default connect(mapStateToProps)(App);