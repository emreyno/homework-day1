import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import User from './component/User/User'

class App extends Component {
  state = {
    tasks: [
      {
        title: 'Clean floor',
        completed: 'false',
      },
      {
        title: 'Give the Dog a Bath',
        completed: 'false',
      },
      {
        title: 'Order Takeout food',
        completed: 'true',
      },
    ],
    user: 'Justin Dimagiba'
  };

  doneTaskHandler = (index) => {  
    const tasks = [ ...this.state.tasks ];
    tasks[index].completed = 'true';

    this.setState({ tasks });
  }

  changeInputHandler = (event) => {
    this.setState({
      user: event.target.value
    });
  }

  backToDefault = () =>{
    this.setState({
      user: 'Justin Dimagiba'
    });
  }

  render() {

    const tasks = this.state.tasks.map((task, index) => (
      <Task
        clicked={() => this.doneTaskHandler(index)}
        completed={task.completed}
      >
        {task.title}
      </Task>
    ));

    return (
      <div className="App">
        <h1>Task Manager</h1>

        <User
          changed={this.changeInputHandler}
          reset={this.backToDefault}
          user={this.state.user}
        />
        {tasks}
      </div>
    );
  }
}

export default App;
