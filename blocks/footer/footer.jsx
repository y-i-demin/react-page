import React, { Component } from 'react';
import { Social, Copyright, Navigation } from '../blocks.jsx';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Social />
                <Navigation />
                <Copyright />
            </footer>
        )
    }
}
