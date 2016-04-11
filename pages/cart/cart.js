/**
 * Полифил Object.assign
 */
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
    /**
     * goods - заглушка, храним json с товарными позициями на frontend'e
     */
    const initialState = {
        cart: api.getCart(),
        goods: api.getGoods()
    };

    /**
     * Создание хранилища.
     * rootReducer - корневой редьюсер. Необходим для связи хранилища с изменяющими его функциями.
     * initialState - исходное состояние приложения.
     * thunk - прослойка для создания асинхронных redux-action, по умолчанию redux ждет возвращения объекта из action-функци.
     * @returns {Store}
     */
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    /**
     * Подписываемся на изменеие хранилища для своевременной записи состояния корзины в localStorage
     */
    store.subscribe(() => {
        api.saveState(store.getState());
    });

    /**
     * Provider - пробрасывает состояние в контейнеры
     */
    ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
})();
