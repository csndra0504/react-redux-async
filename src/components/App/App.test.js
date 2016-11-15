import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../../reducers/index';
import App from './App';

const middleware = [ thunk ];

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider> , div);
});
