import React, { memo,useEffect } from 'react';
import styles from './Task.module.css';


const completedEqual = (prevProps, nextProps) => {
  return prevProps.completed === nextProps.completed
}


const Task = ({task,done,remove}) => {




  let classNames = [ styles.Task ];
  task.completed
      ? classNames.push(styles.Completed)
      : classNames.push(styles.Incomplete);
  

  return (
      <div className={classNames.join(' ')}>
        <h3 className={styles.inline}>{task.title}</h3>
        <img
          src="https://image.flaticon.com/icons/svg/929/929416.svg"
          alt="close"
          onClick={()=>remove(task.title)}
        />
        <img
          src="https://image.flaticon.com/icons/png/512/846/846004.png"
          alt="check"
          onClick={()=>done(task.title)}
        />
      </div>
    );
};

export default Task;