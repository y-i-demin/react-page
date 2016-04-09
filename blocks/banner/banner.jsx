import React, { Component } from 'react';

export class Banner extends Component {
    render() {
        return (
            <section className="section banner">
                <span className="banner-for-all">Для всех типов счетов</span>
                <span className="banner-commission">
                    <span className="banner-commission-zero" />
                    <span className="banner-commission-info">Комиссия за переводы</span>
                </span>
                <span className="banner-info">
                    Выводя со счета форекс-брокера EXNESS $1000, вы получаете на свой кошелек или банковский счет ровно $1000.
                </span>
            </section>
        )
    }
}
