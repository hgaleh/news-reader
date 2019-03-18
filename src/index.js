import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducer from './reducer/reducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {loadFrom, saveTo} from './persistLocalStorage';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [ thunk, loadFrom() ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(appReducer, middleware);
store.subscribe(() => {
	saveTo(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();