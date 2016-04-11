import { combineReducers } from 'redux';
import { default as cart } from '../../blocks/cart/reducers.js';
import { goods } from '../../blocks/goods/reducers.js';

/**
 * Корневой редьюсер, связывает сегменты хранилища с редьюсерами
 * "store.goods: goods(store.goods, action)"
 * @combineReducers
 * @returns {Object} state
 */
export default combineReducers({
    goods,
    cart
});
