import goods from '../../lib/data/goods.json';

export default {
    /**
     * Возвращает массив товарных позиций
     * @returns {Array}
     */
    getGoods() {
        return goods;
    },

    /**
     * Возвращает сохраненное состояние корзины
     * @returns {Object}
     */
    getCart() {
        return localStorage.cart && JSON.parse(localStorage.cart) || {
            items: {},
            sort: {},
            sync: null
        };
    },

    /**
     * Cохраненние текущего состояния корзины
     * @param {Object} state - состояние приложения
     */
    saveState(state = {}) {
        if (!window.localStorage) {
            return;
        }

        if (state.cart) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
}
