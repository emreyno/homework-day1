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
    axios.get('/todos')
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
      .catch(err =>{
        alert('Error in getting todos');
      })
  }

  doneTaskHandler = (id) => {
    axios.put(`/todos/${id}`, {completed: true})
      .then(res =>{
        this.setState({tasks: res.data});
      })
      .catch(err => { 
        alert(`Failed to update Task with Id: ${id}`)
      });  
  };

  deleteTaskHandler = (id) => {
    axios.delete(`/todos/${id}`)
      .then(res => {
        this.setState({
          tasks: res.data
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
    axios.post(`http://localhost:8000/clear/todos`)
    .then((result) => {
      this.setState({
        tasks: result.data
      })
    });
  };


  addTaskHandler = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      completed: false,
    };

    let tasks = []
    axios.post('/todos', newTask).then((res) => {
      tasks = [res.data, ...this.state.tasks];
      this.setState({
        tasks,
      });
    }); 
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
