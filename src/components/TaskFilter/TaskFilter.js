import React, { Component } from 'react';
import styles from './TaskFilter.module.css';

class TaskFilter extends Component {

  categories = [{name: 'all'}, { name: 'incomplete' }, { name: 'complete' }];

  render(){
   console.log('Rendering...');
   const options = this.categories.map((category, index) => {
     return (
       <option key={index} value={category.name}>
         {category.name.toUpperCase()}
       </option>
     );
   });

   return (
     <div className={styles.TaskFilter}>
       <h1>Task Manager</h1>
       <select onChange={this.props.changeCategory}>{options}</select>
       <hr />
     </div>
   );
  }
}

export default TaskFilter;