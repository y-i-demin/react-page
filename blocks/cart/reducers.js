import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_SORT, CLEAR_CART, SYNC_CART } from './actions';

/**
 * Изменение состояния объекта товарных позиций в хранилище
 * @reducer
 * @param {Object} state - текущее состояние
 * @param {Object} action - событие
 * @returns {Object} state
 */
function items(state = {}, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.item;
            const count = action.count || 1;

            return Object.assign({}, state, {
                [item.id]: {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    count: state[item.id] && state[item.id].count ? state[item.id].count + count : count
                }
            });

        case REMOVE_FROM_CART:
            let state = Object.assign({}, state);
            delete state[action.id];
            return state;

        case CLEAR_CART:
            return {};

        default:
            return state;
    }
}

/**
 * Изменение состояния объекта сортировки товарных позиций в хранилище
 * @reducer
 * @param {Object} state - текущее состояние
 * @param {Object} action - событие
 * @returns {Object} state
 */
function sort(state = {}, action = {}) {
    switch (action.type) {
        case SET_CART_SORT:
            return Object.assign({}, state, {
                field: action.field,
                type: state.type === 'asc' ? 'desc' : 'asc'
            });

        default:
            return state;
    }
}

/**
 * Изменение состояния синхроиизации корзины с backend'ом
 * @reducer
 * @param {String|Null} state - текущее состояние
 * @param {Object} action - событие
 * @returns {Object} state
 */
function sync(state = null, action = {}) {
    switch (action.type) {
        case SYNC_CART:
            return action.status;

        default:
            return state;
    }
}

/**
 * Корневой редьюсер, связывает сегменты хранилища с редьюсерами
 * "store.items: items(store.items, action)"
 * @combineReducers
 * @returns {Object} state
 */
export default combineReducers({
    items,
    sort,
    sync
});
