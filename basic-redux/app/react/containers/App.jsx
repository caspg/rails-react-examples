import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/Counter';
import * as CounterActions from '../actions';

export default class App extends Component {
  render() {
    const { dispatch, counter } = this.props;
    const boundActionCreators = bindActionCreators(CounterActions, dispatch);

    return (
      <div className="container">
        <div className="col-sm-offset-2 col-sm-8">
          <div style={{ border: '1px solid #ccc', borderRadius: 5, padding: 20, marginTop: 50  }}>
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
