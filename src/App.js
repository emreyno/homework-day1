import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import TaskFilter from './components/TaskFilter/TaskFilter';
import AddTask from './components/AddTask/AddTask';

class App extends Component {
  state = {
    filter: 'all' 
  }

  changeSelectHandler = (event) =>{
    this.setState({ filter: event.target.value })
  }

  render(){
    return (
      <div className="App">
        <TaskFilter changeCategory={this.changeSelectHandler}/>
        <AddTask/>
        <Tasks filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
