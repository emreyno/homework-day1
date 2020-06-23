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
          <input type="text" onChange={this.changeInputHandler} value={this.state.user}></input>
          <h3>These tasks are for {this.state.user}</h3>
        </div>

        <div className="Task">
          <h3>{this.state.tasks[0].title}</h3>
          <p>Done: {this.state.tasks[0].completed}</p>
          <button onClick={() => this.doneTaskHandler(0)}>I Am Done!</button>
        </div>
        <div className="Task">
          <h3>{this.state.tasks[1].title}</h3>
          <p>Done: {this.state.tasks[1].completed}</p>
          <button onClick={() => this.doneTaskHandler(1)}>I Am Done!</button>
        </div>
        <div className="Task">
          <h3>{this.state.tasks[2].title}</h3>
          <p>Done: {this.state.tasks[2].completed}</p>
          <button onClick={() => this.doneTaskHandler(2)}>I Am Done!</button>
        </div>
      </div>
    );
  }
}

export default App;
