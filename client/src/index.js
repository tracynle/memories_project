import React from 'react';
import ReactDom from 'react-dom';

// provider keeps track of the store and allows us to access the store 
// anywhere in the app
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)) );




ReactDom.render(
    <Provider store= { store }>
        <App />
    </Provider>,
    document.getElementById('root')
);