import React, { useEffect } from 'react';
import './App.css';
import Task from './component/Task/Task'
import AddTask from './component/AddTask/AddTask';
import ClearTask from './component/ClearTask/ClearTask';
import User from './component/User/User';
import withLoading from './HOC/withLoading';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const App = (props) => {

  // const [state, setState] = useState({
  //   tasks: [],
  // });
  const getTasks = (state) => state.todo.tasks;

  const reduxTasks = useSelector(getTasks);

  useEffect(() => {
  },[])

  const doneTaskHandler = (id) => {
    
  };

  const deleteTaskHandler = (id) => {
  
  };

  // const changeInputHandler = (event) => {
    
  // };

  const clearTaskHandler = () => {
  };

  let tasks = <h2>Wala ka talagang gagawin ngayong araw?</h2>;

  if (reduxTasks.length > 0) {
    tasks = reduxTasks.map((task) => (
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
          <User/>
        </Route>
        <Route path="/add">
          <AddTask  />
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
