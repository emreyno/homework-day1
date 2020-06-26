import React, { Component } from 'react';


class ClearTask extends Component {

  shouldComponentUpdate(){
    return false;
  }

  render() {
    return (
      <button className="clearBtn" onClick={this.props.clicked}>
        Clear Tasks
      </button>
    );
  }
}

export default ClearTask;
