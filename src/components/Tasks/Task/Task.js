import React from 'react';
import styles from './Task.module.css';

const Task = (props) => {
  
  let taskStyle = [
    styles.Task,
    props.task.completed ? styles.Complete : styles.Incomplete,
  ];
  return (
    <div onClick={props.clicked} className={taskStyle.join(' ')}>
      <h4>
        Tasks #{props.task.id}: {props.task.title}
      </h4>
    </div>
  );
};

export default Task;