import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_SORT, CLEAR_CART, SYNC_CART } from './actions';

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

function sync(state = null, action = {}) {
    switch (action.type) {
        case SYNC_CART:
            return action.status;

        default:
            return state;
    }
}

export default combineReducers({
    items,
    sort,
    sync
});
