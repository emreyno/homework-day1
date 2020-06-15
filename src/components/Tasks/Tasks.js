import React, { Component }  from 'react';
import { TodoData } from '../../containers/TodoData';
import Task from './Task/Task';

class Tasks extends Component {
  tasks = TodoData;

  state = {
    showTasks: [...this.tasks],
  };

  removeTaskhandler = (taskId) => {
    let currentTasks = [...this.state.showTasks];
    const taskIndex = currentTasks.findIndex(task =>{
      return task.id === taskId;
    });

    currentTasks.splice(taskIndex,1);

    this.setState({
      showTasks: currentTasks
    })
  };

  render() {
    let unfilteredTask = [...this.state.showTasks];
    if (this.props.filter !== 'all'){
      if (this.props.filter !== 'incomplete') {
        unfilteredTask = unfilteredTask.filter((task) => task.completed);
      }

      if (this.props.filter !== 'complete') {
        unfilteredTask = unfilteredTask.filter((task) => !task.completed);
      }
        
    }

    const tasksShow = unfilteredTask.map(task => {
      return <Task 
        key={task.id}
        task={task}
        clicked={() => this.removeTaskhandler(task.id)}
      />
    });

    return (
      <div>
        {tasksShow}
      </div>
    );
  }
}

export default Tasks