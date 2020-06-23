import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import User from './component/User/User'

class App extends Component {
  state = {
    tasks: [
      {
        title: 'Clean floor',
        completed: false,
      },
      {
        title: 'Give the Dog a Bath',
        completed: false,
      },
      {
        title: 'Order Takeout food',
        completed: true,
      },
    ],
    user: 'Justin Dimagiba'
  };

  doneTaskHandler = (index) => {  
    const tasks = [ ...this.state.tasks ];
    tasks[index].completed = true;

    this.setState({ tasks });
  }

  changeInputHandler = (event) => {
    this.setState({
      user: event.target.value
    });
  }

  clearTaskHandler = () =>{
    this.setState({
      tasks: []
    });
  }

  render() {


    let tasks = <h2>Congrats! Libre na araw mo!</h2>
    
    if (this.state.tasks.length > 0){
      tasks = this.state.tasks.map((task, index) => (
        <Task
          key={index}
          clicked={() => this.doneTaskHandler(index)}
          completed={task.completed}
        >
          {task.title}
        </Task>
      ));
    }
   

    return (
      <div className="App">
        <h1>Task Manager</h1>

        <User
          changed={this.changeInputHandler}
          user={this.state.user}
        />
        <button className="clearBtn" onClick={this.clearTaskHandler}>Clear Tasks</button>
        {tasks}
      </div>
    );
  }
}

export default App;
