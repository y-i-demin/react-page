import React, { Component } from 'react';

export class Social extends Component {
    constructor() {
        super();

        this.items = [
            { code: 'vk', href: "#", name: 'vkontakte' },
            { code: 'ok', href: "#", name: 'odnoklassniki' },
            { code: 'tw', href: "#", name: 'twitter' },
            { code: 'fb', href: "#", name: 'facebook' },
            { code: 'yt', href: "#", name: 'youtube' },
            { code: 'in', href: "#", name: 'linkedin' },
            { code: 'ks', href: "#", name: 'ksin' },
            { code: 'ig', href: "#", name: 'instagram' },
            { code: 'gg', href: "#", name: 'google+'}
        ];
    }

    render() {
        return (
            <div className="social">
                {this.items.map(item =>
                    <a
                        key={ item.code }
                        href={ item.href }
                        className={ 'social-item social-item__' + item.code } />
                )}
            </div>
        )
    }
}
