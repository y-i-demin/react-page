import React, { Component } from 'react';
import { Header, Banner, Footer, PaymentSystems } from '../../blocks/blocks.jsx';

/**
 * @class App - контейнер компонентов
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
                <PaymentSystems />
                <Footer />
            </div>
        )
    }
}
