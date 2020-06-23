import React, { Component } from 'react';
import './App.css';

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
  };

  render() {
    return (
      <div className="App">
        <h1>Task Manager</h1>
        <div className="Task">
          <h3>{this.state.tasks[0].title}</h3>
          <p>Done: {this.state.tasks[0].completed}</p>
        </div>
        <div className="Task">
          <h3>{this.state.tasks[1].title}</h3>
          <p>Done: {this.state.tasks[1].completed}</p>
        </div>
        <div className="Task">
          <h3>{this.state.tasks[2].title}</h3>
          <p>Done: {this.state.tasks[2].completed}</p>
        </div>
      </div>
    );
  }
}

export default App;
