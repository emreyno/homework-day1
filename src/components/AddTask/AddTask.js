import React, { Component } from 'react';
import styles from './AddTask.module.css';

class AddTask extends Component{

  addTaskHandler = () =>{
    alert(`Task Added!`);
  }

  render(){
   return (
     <div className={styles.AddTask}>
       <button onClick={this.addTaskHandler}>Add Task</button>
       <hr />
     </div>
   );
  }
 
}

export default AddTask;