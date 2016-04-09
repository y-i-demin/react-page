import React, { Component } from 'react';
import { Social, Copyright, Navigation } from '../blocks.jsx';

export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <Social />
                <Navigation />
                <Copyright />
            </section>
        )
    }
}
