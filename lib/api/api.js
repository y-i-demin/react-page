import goods from '../../lib/data/goods.json';

export default {
    getGoods() {
        return goods;
    },

    getCart() {
        return localStorage.cart && JSON.parse(localStorage.cart) || {
            items: {},
            sort: {},
            sync: null
        };
    },

    saveState(state = {}) {
        if (!window.localStorage) {
            return;
        }

        if (state.cart) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
}
