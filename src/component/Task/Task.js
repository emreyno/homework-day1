import React, { Component } from 'react';
import styles from './Task.module.css';

class Task extends Component {

  render(){
    
    let classNames = [ styles.Task ];
    this.props.completed
      ? classNames.push(styles.Completed)
      : classNames.push(styles.Incomplete);

    return (
      <div className={classNames.join(' ')}>
        <h3>{this.props.children}</h3>
        <button onClick={this.props.clicked}>I Am Done!</button>
      </div>
    );
  }
}

export default Task;