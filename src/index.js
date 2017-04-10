import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromiseMiddleware from 'redux-promise';

import App from './components/App.component.jsx';
import reducers from './reducers';
import './../assets/styles/style.css';

const createStoreWithMiddleware = applyMiddleware(
	ReduxPromiseMiddleware
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.root'));
