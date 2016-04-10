import React, { Component } from 'react';

export class PaymentSystems extends Component {
    constructor() {
        super();

        this.paymentSystems = [
            'fp', 'cash', 'pm', 'wm',
            'net', 'visa', 'pw', 'uk'
        ];
    }

    render() {
        return (
            <section className="payment-systems">
                <h2 className="payment-systems-title">Доступные платежные системы</h2>
                <div className="payment-systems-icons">
                    <ul className="payment-systems-icons-list">
                        {this.paymentSystems.map(system =>
                            <li key={ 'item-' + system } className="payment-systems-icons-item">
                                <img src={ './lib/images/icon-ps-' + system + '.png' } />
                            </li>
                        )}
                    </ul>
                    <span className="payment-systems-icons-bt payment-systems-icons-bt-left" />
                    <span className="payment-systems-icons-bt payment-systems-icons-bt-right" />
                </div>
            </section>
        )
    }
}
