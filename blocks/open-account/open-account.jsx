import React, { Component } from 'react';

export class OpenAccount extends Component {
    render() {
        return (
            <div className="open-account-form">
                <form>
                    <span className="open-account-form-input-wrap">
                        <input className="open-account-form-input" placeholder="Мобильный телефон" />
                        <span className="open-account-form-input-hint">Пример: +71234431123</span>
                    </span>
                    <span className="open-account-form-input-wrap">
                        <input className="open-account-form-input" placeholder="Адрес электронной почты" />
                    </span>
                    <button className="button">Открыть счет</button>
                </form>

                <div className="open-account-note">
                    По некоторым <a href="#">способам ввода/вывода средств</a> действует ограничение по размеру минимальной суммы операции для осуществления транзакции без комиссии.
                </div>
            </div>
        )
    }
}
