import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href="#" className="header-logo" />

                <div className="header-settings">
                    <span className="header-settings-lang">русский</span>
                    <a href="#" className="header-settings-website">сайт exness</a>
                </div>

                <h1 className="header-title">Подлинная свобода распоряжения своими средствами на Форекс</h1>
                <h2 className="header-subtitle">Пополняйте счет и выводите прибыть без комиссий</h2>

                <a href="#" className="button">пополнить счет</a>
            </header>
        )
    }
}
