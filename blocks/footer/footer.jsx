import React, { Component } from 'react';
import { Social, Copyright } from '../blocks.jsx';

export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <Social />
                <Copyright />
            </section>
        )
    }
}
