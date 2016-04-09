import React, { Component } from 'react';

export class Navigation extends Component {
    constructor() {
        super();

        this.items = [
            [
                { name: 'О компании', href: '#' },
                { name: 'Общие сведения', href: '#' },
                { name: 'Почему Exness?', href: '#' },
                { name: 'Менеджмент', href: '#' },
                { name: 'Регуляция', href: '#' },
                { name: 'Служба поддержки клиентов', href: '#' }
            ],
            [
                { name: 'Торговля', href: '#' },
                { name: 'Открыть торговый счет', href: '#' },
                { name: 'Пополнение и снятие средств', href: '#' },
                { name: 'Спецификации контрактов', href: '#' },
                { name: 'Правила предоставления кредитного плеча', href: '#' }
            ],
            [
                { name: 'Инструменты', href: '#' },
                { name: 'MetaTrader 4', href: '#' },
                { name: 'MetaTrader 5', href: '#' },
                { name: 'Webtrader', href: '#' },
                { name: 'Мобильные платформы', href: '#' }
            ],
            [
                { name: '', href: '' },
                { name: 'Экономический календарь', href: '#' },
                { name: 'Аналитика', href: '#' },
                { name: 'Калькулятор трейдера и конвертер валют', href: '#' },
                { name: 'Загрузки', href: '#' }
            ],
            [
                { name: 'Партнерство', href: '#' },
                { name: 'Библиотека', href: '#' },
                { name: 'FAQ', href: '#' },
            ]
        ]
    }

    render() {
        return (
            <div className="navigation">
                { this.items.map((block, index) =>
                    <NavigationBlock
                        items={ block }
                        isLast={ index === this.items.length - 1 }
                        key={ 'item-' + index } />
                )}
            </div>
        )
    }
}

class NavigationBlock extends Component {
    render() {
        console.log();
        return (
            <ul className={ 'navigation-list' + (this.props.items[0].name !== '' ? '' : ' navigation-list-emptyhead')}>
                { this.props.items.map((item, index) => {
                    if (!item.name) {
                        return (
                            <li key={ 'item-' + index }>&nbsp;</li>
                        )
                    }

                    return (
                        <li key={ 'item-' + index } className={ 'navigation-list-item' + (index === 0 ? ' navigation-list-item-head' : '')}>
                            <a
                                href={ item.href }
                                className={ 'navigation-list-item-link' + (index === 0 || this.props.isLast ? ' navigation-list-item-link__head' : '') }>
                                { item.name ? item.name : ' ' }
                            </a>
                        </li>
                    )
                }) }
            </ul>
        )
    }
}
