import React, { Component } from 'react';
import { Header, Banner } from '../../blocks/blocks.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Banner />
            </div>
        )
    }
}
