import React, { Component } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import ClearTask from './component/ClearTask/ClearTask';
import axios from 'axios';

class App extends Component {
  state = {
    tasks: [ ],
    user: 'Justin Dimagiba',
  };

  componentDidMount(){
    axios.get('http://localhost:8000/todos')
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
  }

  doneTaskHandler = (id) => {
    axios.put(`http://localhost:8000/todos/${id}`, {completed: true})
      .then(res =>{
        this.setState({tasks: res.data});
      })
      .catch(err => { 
        alert(`Failed to update Task with Id: ${id}`)
      });  
  };

  deleteTaskHandler = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`)
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
    axios.post('http://localhost:8000/todos', newTask).then((res) => {
      tasks = [res.data, ...this.state.tasks];
      this.setState({
        tasks,
      });
    }); 
  };



  componentDidUpdate(){

  }

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
        <AddTask
          onAddTask={this.addTaskHandler}
        />
        <ClearTask
          clicked={this.clearTaskHandler}
        />
        {tasks}
      </div>
    );
  }
}

export default App;