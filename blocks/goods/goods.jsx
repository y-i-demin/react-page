import React, { Component } from 'react';
import { addToCart, removeFromCart, setSort } from '../cart/actions';

export class Goods extends Component {
    shouldComponentUpdate() {
        return false;
    }

    fillCart() {
        this.props.goods.map(item => {
            this.props.dispatch(addToCart(item, Math.round(Math.random()*10)));
        });
    }

    render() {
        return (
            <section className="goods">
                <h2>Goods</h2>
                <GoodsList
                    add={ true }
                    items={ this.props.goods }
                    dispatch={ this.props.dispatch } />

                <span className="goods-fillcart" onClick={ this.fillCart.bind(this) }>заполнить корзину</span>
            </section>
        )
    }
}

export class GoodsList extends Component {
    render() {
        return (
            <If condition={ this.props.items.length }>
                <table className="list">
                    <tbody>
                        <If condition={ this.props.sortRow }>
                            <SortRow dispatch={ this.props.dispatch } />
                        </If>
                        {this.props.items.map(item =>
                            <GoodsItem
                                add={ this.props.add }
                                dispatch={ this.props.dispatch }
                                key={ item.id }
                                item={ item } />
                        )}
                    </tbody>
                </table>
            </If>
        )
    }
}

class GoodsItem extends Component {
    removeFromCart(item) {
        this.props.dispatch(removeFromCart(item.id));
    }

    addToCart(item) {
        this.props.dispatch(addToCart(item));
    }

    render() {
        const item = this.props.item;

        return (
            <tr className="list-item">
                <td className="list-item-prop list-item-prop-name">{ item.name }</td>
                <td className="list-item-prop list-item-prop-price">{ item.price } руб.</td>
                <td className="list-item-prop list-item-prop-count">{ item.count }</td>
                <td className="list-item-prop list-item-prop-bt">
                    <If condition={ this.props.add }>
                        <span className="list-item-add" onClick={ this.addToCart.bind(this, item) }>купить</span>
                    <Else />
                        <span className="list-item-remove" onClick={ this.removeFromCart.bind(this, item) }>удалить</span>
                    </If>
                </td>
            </tr>
        )
    }
}

class SortRow extends Component {
    setSort(field) {
        this.props.dispatch(setSort(field));
    }

    render() {
        return (
            <tr className="list-item list-item-sort">
                <td className="list-item-prop" onClick={ this.setSort.bind(this, 'name') }>название</td>
                <td className="list-item-prop" onClick={ this.setSort.bind(this, 'price') }>цена</td>
                <td className="list-item-prop list-item-prop-count" onClick={ this.setSort.bind(this, 'count') }>количество</td>
                <td className="list-item-prop"></td>
            </tr>
        )
    }
}
