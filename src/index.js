import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reduxReducer from './reduxReducer';

let store = createStore( reduxReducer, applyMiddleware(thunk) );

ReactDOM.render(
	<Provider store = { store }>
	    <App />
	</Provider>, 
	document.getElementById('root')
);
//registerServiceWorker();
