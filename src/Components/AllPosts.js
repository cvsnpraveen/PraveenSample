import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PostData } from './PostData';

class AllPosts extends Component {
  render() {
    console.log("props=>", this.props);
    return (
      <div className="AllPosts">
        <h1>All Posts</h1>
        <div className="comment">
          {
            this.props.posts && this.props.posts.length > 0 ?
              this.props.posts.map((post, index) => <PostData key={index} posts={post}></PostData>) : "No Posts available to Display"
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPosts);