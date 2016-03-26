import React, { Component, PropTypes } from 'react';

export default class CounterDisplay extends Component {
  render() {
    return (
      <div className="navbar-text">
        <span>your current score:{' '}</span>
        <span>{this.props.counter}</span>
      </div>
    );
  }
}

CounterDisplay.propTypes = {
  counter: PropTypes.number.isRequired
}
