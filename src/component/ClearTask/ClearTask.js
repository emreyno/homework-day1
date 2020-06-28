import React, { PureComponent } from 'react';


class ClearTask extends PureComponent {

  render() {
    return (
      <button className="clearBtn" onClick={this.props.clicked}>
        Clear Tasks
      </button>
    );
  }
}

export default ClearTask;
