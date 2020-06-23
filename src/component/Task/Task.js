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
        <h3 className={styles.inline}>{this.props.children}</h3>
        <img
          src="https://image.flaticon.com/icons/svg/929/929416.svg"
          alt="close"
          onClick={this.props.remove}
        />
        <img
          src="https://image.flaticon.com/icons/png/512/846/846004.png"
          alt="check"
          onClick={this.props.clicked}
        />
      </div>
    );
  }
}

export default Task;