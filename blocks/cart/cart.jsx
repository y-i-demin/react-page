import React, { Component } from 'react';
import { GoodsList } from '../goods/goods.jsx';
import { clearCart, syncCart } from './actions';
import stable from 'stable';

export class Cart extends Component {
    /**
     * Сортировка товарных позиций
     * @param {Array} cart - массив товарных позиций
     * @param {Object} options - параметры сортировки
     * @returns {Array}
     */
    sortCart(cart, options) {
        function lexCmp(a, b) {
            return options.type === 'asc' ? String(a[options.field]).localeCompare(b[options.field])
                : String(b[options.field]).localeCompare(a[options.field]);
        }

        return stable(cart, lexCmp);
    }

    /**
     * Трансформация полученного объекта товарных позиций.
     * @returns {Array}
     */
    getCart() {
        const result = [];

        Object.keys(this.props.cart.items).map(item => {
            result.push(this.props.cart.items[item]);
        });

        if (this.props.cart.sort && this.props.cart.sort.field) {
            return this.sortCart(result, this.props.cart.sort);
        }

        return result;
    }

    /**
     * Очистка корзины
     */
    clearCart() {
        this.props.dispatch(clearCart());
        this.props.dispatch(syncCart());
    }

    /**
     * Синхронизация с сервером. Заглушка
     */
    syncCart(reject) {
        if (this.clearSync) {
            clearTimeout(this.clearSync);
        }

        this.props.dispatch(syncCart(reject));
        this.clearSync = setTimeout(() => {
            this.props.dispatch(syncCart());
        }, 5000);
    }

    render() {
        const items = this.getCart();

        return (
            <If condition={ items.length }>
                <section className="cart">
                    <h2>Cart</h2>

                    <GoodsList
                        add={ false }
                        sortRow={ true }
                        items={ items }
                        dispatch={ this.props.dispatch } />

                    <span className="cart-removeall" onClick={ this.clearCart.bind(this) }>очистить корзину</span>
                    <span className="cart-sync" onClick={ this.syncCart.bind(this, false) }>синхнорнизация (success)</span>
                    <span className="cart-sync" onClick={ this.syncCart.bind(this, true) }>синхнорнизация (error)</span>

                    <If condition={ this.props.cart.sync }>
                        <div className={ 'cart-sync-status cart-sync-status__' + this.props.cart.sync }>
                            <If condition={ this.props.cart.sync === 'error' }>
                                Что-то пошло не так, мы уже знаем об ошибке и исправляем её. Попробуйте позже :(
                            <Else />
                                Ваша корзина успешно синхронизирована ;)
                            </If>
                        </div>
                    </If>
                </section>
            </If>
        )
    }
}
