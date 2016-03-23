import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as CounterActions from '../actions';

class CounterPage extends Component {
  render() {
    const { dispatch, counter } = this.props;
    const boundActionCreators = bindActionCreators(CounterActions, dispatch);

    return (
      <Counter
        counter={counter}
        {...boundActionCreators}
      />
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(CounterPage);
