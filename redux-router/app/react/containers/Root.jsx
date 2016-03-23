import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import RWRRedux from 'rwr-redux';

import App from './App';
import CounterPage from './CounterPage';

export default class Root extends Component {
  get history() {
    // RWRRedux.getStore() provides access to store registered in react/index.js
    const mountedStore = RWRRedux.getStore();
    return syncHistoryWithStore(browserHistory, mountedStore);
  }

  render() {
    return (
      <Router history={this.history} >
        <Route path="/" component={App}>
          <IndexRoute component={CounterPage} />
        </Route>
      </Router>
    );
  }
}
