import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import { v4 as uuidv4 } from 'uuid';
import ClearTask from './component/ClearTask/ClearTask';
import User from './component/User/User';

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
    newTask: '',
  };

  doneTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex].completed = true;

    this.setState({ tasks });
  };

  deleteTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(taskIndex, 1);

    this.setState({
      tasks,
    });
  };

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

  addTaskHandler = () => {
    const tasks = [...this.state.tasks];
    tasks.push({
      id: uuidv4(),
      title: this.state.newTask,
      completed: false,
    });

    this.setState({
      tasks,
      newTask: '',
    });
  };

  inputNewTaskHandler = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  changeInputHandler = (event) => {
    this.setState({
      user: event.target.value,
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
        <AddTask
          newTask={this.state.newTask}
          changed={this.inputNewTaskHandler}
          onAddTask={this.addTaskHandler}
        />
        <ClearTask clicked={this.clearTaskHandler} />
        {tasks}
      </div>
    );
  }
}

export default App;
