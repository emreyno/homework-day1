import React, { memo } from 'react';
import styles from './Task.module.css';

const completedEqual = (prevProps, nextProps) => {
  return prevProps.completed === nextProps.completed
}


const Task = memo((props) => {

  let classNames = [ styles.Task ];
    props.completed
      ? classNames.push(styles.Completed)
      : classNames.push(styles.Incomplete);

  return (
      <div className={classNames.join(' ')}>
        <h3 className={styles.inline}>{props.children}</h3>
        <img
          src="https://image.flaticon.com/icons/svg/929/929416.svg"
          alt="close"
          onClick={props.remove}
        />
        <img
          src="https://image.flaticon.com/icons/png/512/846/846004.png"
          alt="check"
          onClick={props.clicked}
        />
      </div>
    );
}, completedEqual);

export default Task;