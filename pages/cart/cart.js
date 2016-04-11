import 'core-js/fn/object/assign.js';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app.jsx';
import rootReducer from './reducers';
import api from '../../lib/api/api.js';

(function() {
    const initialState = {
        cart: api.getCart(),
        goods: api.getGoods()
    };

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    store.subscribe(() => {
        api.saveState(store.getState());
    });

    ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
})();
