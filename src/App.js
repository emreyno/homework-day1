import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Task Manager</h1>
        <div className="Task">Clean Bathroom</div>
        <div className="Task">Feed Dog</div>
        <div className="Task">Order Takeout food</div>
      </div>
    );
  }
}

export default App;
