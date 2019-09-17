import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import allPostReducer from './Reducers/allPost';
import newPostReducer from './Reducers/newPost';

const rootReducers = combineReducers({ newPostReducer, allPostReducer });
const store = createStore(newPostReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));