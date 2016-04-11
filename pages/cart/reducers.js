import { combineReducers } from 'redux';
import { default as cart } from '../../blocks/cart/reducers.js';
import { goods } from '../../blocks/goods/reducers.js';

export default combineReducers({
    goods,
    cart
});
