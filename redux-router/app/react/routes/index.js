import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../containers/App';
import CounterPage from '../containers/CounterPage';
import ScorePage from '../components/ScorePage';
import About from '../components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CounterPage} />
    <Route path="/score-board" component={ScorePage} />
    <Route path="/about" component={About} />
  </Route>
);
