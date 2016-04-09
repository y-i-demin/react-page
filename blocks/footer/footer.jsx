import React, { Component } from 'react';
import { Social } from '../social/social.jsx';
import { Copyright } from '../copyright/copyright.jsx';

export class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <Social />
                <div className="footer-section">
                    <Copyright />
                </div>
            </section>
        )
    }
}
