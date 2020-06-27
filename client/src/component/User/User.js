import React, { Component } from 'react';


class User extends Component {
  state = {
    user: 'Justin Dimagiba',
  };

  changeInputHandler = (event) => {
    this.setState({
      user: event.target.value,
    });
  };

  render() {
    return (
      <div className="User">
        <input
          type="text"
          onChange={this.changeInputHandler}
          value={this.state.user}
        ></input>
        <h3>These tasks are for {this.state.user}</h3>
      </div>
    );
  }
}

export default User;