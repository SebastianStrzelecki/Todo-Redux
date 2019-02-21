import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './css/bootstrap.min.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
      <App />
    </Provider>
  );

//const unsubscribe = store.subscribe(() => console.log(store.getState()))
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
