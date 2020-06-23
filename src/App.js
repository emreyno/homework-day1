import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import User from './component/User/User'

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: 'Clean floor',
        completed: false,
      },
      {
        id: 2,
        title: 'Give the Dog a Bath',
        completed: false,
      },
      {
        id: 3,
        title: 'Order Takeout food',
        completed: true,
      },
    ],
    user: 'Justin Dimagiba',
  };

  doneTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = true;

    this.setState({ tasks });
  };

  deleteTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(taskIndex,1);

    this.setState({
      tasks
    })
  }

  changeInputHandler = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  clearTaskHandler = () => {
    this.setState({
      tasks: [],
    });
  };



  render() {
    let tasks = <h2>Wala ka talagang gagawin ngayong araw?</h2>;

    if (this.state.tasks.length > 0) {
      tasks = this.state.tasks.map((task) => (
        <Task
          key={task.id}
          clicked={() => this.doneTaskHandler(task.id)}
          remove={() => this.deleteTaskHandler(task.id)}
          completed={task.completed}
        >
          {task.title}
        </Task>
      ));
    }

    return (
      <div className="App">
        <h1>Task Manager</h1>

        <User changed={this.changeInputHandler} user={this.state.user} />
        <button className="clearBtn" onClick={this.clearTaskHandler}>
          Clear Tasks
        </button>
        {tasks}
      </div>
    );
  }
}

export default App;
