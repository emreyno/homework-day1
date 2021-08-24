import React, { useEffect } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import ClearTask from './component/ClearTask/ClearTask';
import User from './component/User/User';
import withLoading from './HOC/withLoading';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { doneTask,removeTask} from './redux/reducers/todo-reducer';

const App = (props) => {

 
  
  useEffect(() => {
  },[])

  const getTasks = (state) => state.todo.tasks;

  const reduxTasks = useSelector(getTasks);

  const dispatch = useDispatch();
 
  const doneTaskHandler = (title) => {
    dispatch(doneTask(title));
  
  };

  const deleteTaskHandler = (title) => {
    dispatch(removeTask(title));
    
  };


  console.log(reduxTasks);
  let tasks = <h2>Wala ka talagang gagawin ngayong araw?</h2>;

  if (reduxTasks.length > 0) {
    tasks = reduxTasks.map((task) => (
      <Task
        key={task.id}
        task ={task}
        done={doneTaskHandler}
        remove ={deleteTaskHandler}
      /> 
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
          <User/>
        </Route>
        <Route path="/add">
          <AddTask  />
        </Route>
        <Route path="/tasks">
          <ClearTask />
          {tasks}
        </Route>
      </Switch>
    </div>
  );

  
}

export default withLoading(App);
