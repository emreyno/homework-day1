import React, { Component } from 'react';


class User extends Component{
  render(){
    return (
      <div className="User">
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.user}
        ></input>
        <h3>These tasks are for {this.props.user}</h3>
      </div>
    );
  }
}

export default User;