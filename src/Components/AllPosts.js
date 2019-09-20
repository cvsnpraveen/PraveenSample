import React, { Component } from 'react';
import { PostData } from './PostData';

class AllPosts extends Component {
  parseTaskType = (task) => {
    switch (task) {
      case "HIGH": 
          return "alert-danger";
      case "MEDIUM": 
          return "alert-warning";
      case "LOW": 
          return "alert-primary";
      case "COMPLETED": 
          return "alert-secondary";
      default: 
      return "alert-info";
    }
  }
  render() {
    const { tasks } = this.props;
    return (
      <fieldset className="AllPosts col-sm-6">
        <legend>All Tasks</legend>
        <div className="comment">
          {
            tasks && tasks.length > 0 ?
              tasks.map((task, i) => <PostData key={i} type={this.parseTaskType(task.priority)} taskInfo={task}></PostData>) : "No Tasks are available... "
          }
        </div>
      </fieldset>
    )
  }
}
export default AllPosts;