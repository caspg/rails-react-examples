import RWR, { integrationsManager } from 'react-webpack-rails';
import RWRRedux from 'rwr-redux';

RWR.run();

integrationsManager.register('redux-store', RWRRedux.storeIntegrationWrapper);
integrationsManager.register('redux-container', RWRRedux.containerIntegrationWrapper);

import CounterStore from './store';
RWRRedux.registerStore('CounterStore', CounterStore);

import Navbar from './containers/Navbar';
RWRRedux.registerContainer('Navbar', Navbar);

import CounterApp from './containers/Root';
RWRRedux.registerContainer('CounterApp', CounterApp);
