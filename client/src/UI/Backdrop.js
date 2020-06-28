import React, { Component } from 'react';
import styles from './Backdrop.module.css';

class Backdrop extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.show !== nextProps.show;
  }

  render() {
  return this.props.show ? (
    <div className={styles.Backdrop}>
      <h3>{this.props.message}</h3>
    </div>
  ) : null;
  }
}

export default Backdrop;