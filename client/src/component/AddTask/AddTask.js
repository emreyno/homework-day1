import React, { useEffect,  useState, memo } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTask } from '../../redux/reducers/todo-reducer';
import styles from './AddTask.module.css';

const AddTask = memo((props) => {

  const getTasks = (state) => state.todo.tasks;

  const reduxTasks = useSelector(getTasks);

  const dispatch = useDispatch();
 
  const [state, setState] = useState({
    newTask: ''
  });

  useEffect(()=>{
    console.log('[AddTask.js] Use Effect called!');
  }, [state.newTask]);


  const inputNewTaskHandler = (event) => {
     setState({
       newTask: event.target.value,
     });
  };

  const addTaskHandler = (title) => {
     const index = reduxTasks.findIndex(task => task.title === title)
    if (index>=0){
      alert("Task already exist")
    }
    else{
      dispatch(addTask(title));
    }
   
  }

  return (
      <div>
        <p>Task Name</p>
        <input type="text" value={state.newTask} onChange={inputNewTaskHandler}></input>
        <div>
          <button className={styles.addButton} onClick={() => addTaskHandler(state.newTask)}>Add Task</button>
        </div>
      </div>
    );

});

export default AddTask;