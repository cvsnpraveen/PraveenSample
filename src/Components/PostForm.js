import React, { Component } from 'react';
class PostForm extends Component {
  render() {
    const { change, submit, form } = this.props;
    return (
      <div className="PostForm col-sm-6">
        <h1>Add Task</h1>
        <br />
        <form onSubmit={submit}>
          <input type="text" name="taskTitle" onChange={change} value={form.taskTitle} placeholder="Enter Task" required /><br /><br />
          <input type="date" name="schedule" onChange={change} value={form.schedule} placeholder="Enter Task" required /><br /><br />
          <select name="priority" value={form.priority} onChange={change}>
            <option value="">--SELECT PRIORITY--</option>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select> <br /> <br />
          <textarea rows="5" defaultValue={form.description} cols="35" name="description" onChange={change} placeholder="More details plz... (Optional)"></textarea><br /><br />
          <button>Add Task</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
