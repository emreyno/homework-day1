import React, { useEffect,  useState, memo } from 'react';
import styles from './AddTask.module.css';

const AddTask = memo((props) => {

 
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

  return (
      <div>
        <p>Task Name</p>
        <input type="text" value={state.newTask} onChange={inputNewTaskHandler}></input>
        <div>
          <button className={styles.addButton} onClick={() => props.onAddTask(state.newTask)}>Add Task</button>
        </div>
      </div>
    );

});

export default AddTask;