import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DevTools from './DevTools';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';

export default class App extends Component {
  render() {
    const { dispatch, counter } = this.props;
    const boundActionCreators = bindActionCreators(CounterActions, dispatch);
    const counterStyle = {
      border: '1px solid #ccc',
      borderRadius: 5,
      padding: 20,
      marginTop: 50
    };

    return (
      <div className="container">
        <DevTools />

        <div className="col-sm-offset-2 col-sm-8">
          <div style={counterStyle}>
            <Counter
              counter={this.props.counter}
              {...boundActionCreators}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(App);
