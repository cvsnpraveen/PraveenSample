import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
  constructor(props) {
    super(props);
    const state = {
      id: new Date(),
      title: "",
      message: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("state=>", this.state);
    console.log("props=>", this.props);
    this.props.dispatch({
      type: 'ADD_POST',
      data: this.state
    })
  }
  render() {
    return (
      <div className="PostForm">
        <h1>Create Post</h1>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="postTitle" onChange={this.handleChange} placeholder="Enter Post Title" required /><br /><br />
          <textarea rows="5" cols="28" name="comment" onChange={this.handleChange} placeholder="Enter Post" required></textarea><br /><br />
          <button>Post</button>
        </form>
      </div>
    )
  }
} 

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps)(PostForm);
