import React, { Component } from 'react';
import PostForm from './Components/PostForm';
import AllPosts from './Components/AllPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm/>
        <AllPosts/>
      </div>
    )
  }
}

export default App;