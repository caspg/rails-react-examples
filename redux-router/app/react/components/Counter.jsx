import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <p>
        Clicked: <strong>{counter}</strong> times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter;
