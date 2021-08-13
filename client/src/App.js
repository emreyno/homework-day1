import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import ClearTask from './component/ClearTask/ClearTask';
import axios from 'axios';
import User from './component/User/User';
import withLoading from './HOC/withLoading';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';


const App = (props) => {

  const [state, setState] = useState({
    tasks: [],
    loading: false,
    loadingMessage: ''
  });

  useEffect(() => {
    axios.get('/todos')
    .then(res => {
      setState({
        ...state,
        tasks: res.data
      });
    }); // eslint-disable-next-line 
  },[])

  const doneTaskHandler = (id) => {
    setState({ ...state, loading: true, loadingMessage: `Marking task ${id} as complete...` });
    axios.put(`/todos/${id}`, {completed: true})
      .then(res =>{
        setState({ ...state, tasks: res.data, loading: false });
      })
      .catch(err => { 
        alert(`Failed to update Task with Id: ${id}`);
        setState({ ...state, loading: false });
      });  
  };

  const deleteTaskHandler = (id) => {
    setState({ ...state, loading: true, loadingMessage: `Deleting task ${id}...`});
    axios.delete(`/todos/${id}`)
      .then(res => {

        setState({
          ...state,
          tasks: res.data,
          loading: false,
        });
      })
      .catch(err => {
        alert(`Failed to delete Task with Id: ${id}`);
        setState({ ...state, oading: false });
      })
  };

  const changeInputHandler = (event) => {
    setState({
      ...state,
      user: event.target.value,
    });
  };

  const clearTaskHandler = () => {
    setState({
      ...state,
      tasks: [],
    });
  };


  const addTaskHandler = (taskTitle) => {
    setState({ ...state, loading: true, loadingMessage: `Adding new Task...` });
    const newTask = {
      title: taskTitle,
      completed: false,
    };

    let tasks = []
    axios.post('/todos', newTask)
      .then(res => {
        tasks = [res.data, ...state.tasks];
         setState({
           ...state,
           tasks,
           loading: false
         });
      })
      .catch(err => {
        alert('Failed to Add Task');
        setState({ ...state, loading: false });
      }) 
    }


  let tasks = <h2>Wala ka talagang gagawin ngayong araw?</h2>;

  if (state.tasks.length > 0) {
    tasks = state.tasks.map((task) => (
      <Task
        key={task.id}
        clicked={() => doneTaskHandler(task.id)}
        remove={() => deleteTaskHandler(task.id)}
        completed={task.completed}
      >
        {task.title}
      </Task>
    ));
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <nav className="topnav">
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/add">Add Tasks</Link>
          </li>
          <li>
            <Link className="link" to="/users">Users</Link>
          </li>
          <li>
            <Link className="link" to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users">
          <User changed={changeInputHandler} user={state.user} />
        </Route>
        <Route path="/add">
          <AddTask onAddTask={addTaskHandler} />
        </Route>
        <Route path="/tasks">
          <ClearTask clicked={clearTaskHandler} />
          {tasks}
        </Route>
      </Switch>
    </div>
  );

  
}

export default withLoading(App);
