import React, { Component } from 'react';


class Task extends Component {

  render(){
    return (
      <div className="Task">
        <h3>{this.props.children}</h3>
        <p>Done: {this.props.completed}</p>
        <button onClick={this.props.clicked}>I Am Done!</button>
      </div>
    );
  }
}

export default Task;