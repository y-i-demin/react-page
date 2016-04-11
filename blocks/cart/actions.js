export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_SORT = 'SET_CART_SORT';
export const CLEAR_CART = 'CLEAR_CART';
export const SYNC_CART = 'SYNC_CART';

export function addToCart(item, count) {
    return {
        type: ADD_TO_CART,
        item,
        count
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function setSort(field) {
    return {
        type: SET_CART_SORT,
        field
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

export function syncCart(reject) {
    return dispatch => {
        dispatch({
            type: SYNC_CART,
            status: typeof reject === 'undefined' ? null : reject ? 'error' : 'ok'
        });
    }
}
