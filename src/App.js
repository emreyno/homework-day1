import React, { Component } from 'react';
import './App.css';
import Task from './component/Task'

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
    return (
      <div className="App">
        <h1>Task Manager</h1>

        <div className="User" onClick={this.backToDefault}>
          <input
            type="text"
            onChange={this.changeInputHandler}
            value={this.state.user}
          ></input>
          <h3>These tasks are for {this.state.user}</h3>
        </div>

        <Task
          clicked={() => this.doneTaskHandler(0)}
          completed={this.state.tasks[0].completed}
        >
          {this.state.tasks[0].title}
        </Task>
        <Task
          clicked={() => this.doneTaskHandler(1)}
          completed={this.state.tasks[1].completed}
        >
          {this.state.tasks[1].title}
        </Task>
        <Task
          clicked={() => this.doneTaskHandler(2)}
          completed={this.state.tasks[2].completed}
        >
          {this.state.tasks[2].title}
        </Task>
      </div>
    );
  }
}

export default App;
