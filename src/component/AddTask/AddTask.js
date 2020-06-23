import React, { Component } from 'react';
import styles from './AddTask.module.css';

class AddTask extends Component {

  shouldComponentUpdate(nextProps){
    return nextProps.newTask !== this.props.newTask;
  }

  render(){
    return (
      <div>
        <p>Task Name</p>
        <input type="text" value={this.props.newTask} onChange={this.props.changed}></input>
        <div>
          <button className={styles.addButton} onClick={this.props.onAddTask}>Add Task</button>
        </div>
      </div>
    );
  }

}

export default AddTask;