import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import ClearTask from './component/ClearTask/ClearTask';
import axios from 'axios';
import User from './component/User/User';

class App extends Component {
  state = {
     tasks: [ ],
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
  }

  doneTaskHandler = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true})
      .then(res =>{
        const tasks = [...this.state.tasks];
        const taskIndex = tasks.findIndex((task) => task.id === id);
        tasks[taskIndex].completed = true;

        this.setState({tasks});
      })
      .catch(err => { 
        alert(`Failed to update Task with Id: ${id}`)
      });  
  };

  deleteTaskHandler = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => {
        const tasks = [...this.state.tasks];
        const taskIndex = tasks.findIndex((task) => task.id === id);
        tasks.splice(taskIndex, 1);

        this.setState({
          tasks,
        });
      })
      .catch(err => {
        alert(`Failed to delete Task with Id: ${id}`);
      })
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


  addTaskHandler = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      completed: false,
    };

    let tasks = []
    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      .then(res => {
        tasks = [res.data, ...this.state.tasks];
         this.setState({
           tasks
         });
      }) 
  };



  componentDidUpdate(prevProps, prevState){
    const completedTasks = [...this.state.tasks].filter(task =>  task.completed);
    if (prevState.tasks.length > this.state.tasks.length) {
      alert(`A tasks has been removed. Tasks remaining ${this.state.tasks.length}`); 
    }else {
      alert(`You've completed ${completedTasks.length}`);
    }

  }

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
          onAddTask={this.addTaskHandler}
        />
        <ClearTask clicked={this.clearTaskHandler} />
        {tasks}
      </div>
    );
  }
}

export default App;
