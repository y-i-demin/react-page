export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART_SORT = 'SET_CART_SORT';
export const CLEAR_CART = 'CLEAR_CART';
export const SYNC_CART = 'SYNC_CART';

/**
 * Событие добавления товара в корзину
 * @action
 * @param {Object} item - объект товарной позиции
 * @param {Number} count - количество добавляемого товара
 * @returns {Object}
 */
export function addToCart(item, count) {
    return {
        type: ADD_TO_CART,
        item,
        count
    }
}

/**
 * Событие удаления товара из корзины
 * @action
 * @param {Number} id - идентификатор товарной позиции
 * @returns {Object}
 */
export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

/**
 * Событие установки сортировки товаров в корзине
 * @action
 * @param {String} field - поле сортировки
 * @returns {Object}
 */
export function setSort(field) {
    return {
        type: SET_CART_SORT,
        field
    }
}

/**
 * Событие очистки корзины
 * @action
 * @returns {Object}
 */
export function clearCart() {
    return {
        type: CLEAR_CART
    }
}

/**
 * Синхронизация корзины с backend'ом. Функция должна осуществлять
 * асинхронный запрос. В вызываемую функции дисатчер передается
 * объект, в котором указывается статус выполнения синхронихазии.
 * @action
 * @returns {Function}
 */
export function syncCart(reject) {
    return dispatch => {
        dispatch({
            type: SYNC_CART,
            status: typeof reject === 'undefined' ? null : reject ? 'error' : 'ok'
        });
    }
}
