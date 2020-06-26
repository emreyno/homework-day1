import React, { Component } from 'react';
import styles from './AddTask.module.css';

class AddTask extends Component {

  state = {
    newTask: ''
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextState.newTask !== this.state.newTask;
  }

  inputNewTaskHandler = (event) => {
     this.setState({
       newTask: event.target.value,
     });
  };

  render(){
    return (
      <div>
        <p>Task Name</p>
        <input type="text" value={this.state.newTask} onChange={this.inputNewTaskHandler}></input>
        <div>
          <button className={styles.addButton} onClick={() => this.props.onAddTask(this.state.newTask)}>Add Task</button>
        </div>
      </div>
    );
  }

}

export default AddTask;