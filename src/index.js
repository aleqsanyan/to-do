import React from 'react';
//import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import App from './App';
import reducers from './reducers/index.js';

import './css-modules/index.scss';

const persistConfig = {
    key: 'root',
    storage,
}



const persistCombinedReducers  = persistCombineReducers(persistConfig, (reducers))

export const store = createStore(persistCombinedReducers,applyMiddleware(thunk));
export const  persistor = persistStore(store)

export default () => {
    return { store, persistor }
}

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>
    </Provider>,

    document.getElementById('root')
);


