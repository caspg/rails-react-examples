import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

RWR.run();

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper);

import Navbar from './components/Navbar';
RWR.registerComponent('Navbar', Navbar);

import CounterStore from './store';
RWRRedux.registerStore('CounterStore', CounterStore);

import CounterApp from './containers/Root';
RWRRedux.registerContainer('CounterApp', CounterApp);
