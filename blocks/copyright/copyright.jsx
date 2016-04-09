import React, { Component } from 'react';

export class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
                <div className="copyright-info">
                    <p className="copyright-info-item">Сайт www.exness.com находится в ведении компании Exness Limited, (регистрационный номер 21927 (IBC 2014). Exness Limited — это внешнеэкономическая компания Сен-Винсента и Гренадин. Компания Exness (Cy) Ltd входит в группу компаний Exness Компания Exness (CY) Ltd управляет сайтом www.exness.eu.</p>

                    <p className="copyright-info-item">
                        Информация на этом сайте может быть скопирована только с письменного разрешения Exness.<br/>
                        СFD являются продуктами маржинальной торговли, соответственно, убытки, понесенные в процессе торговли CFD, могут превысить начальный инвестированный капитал. Торговля CFD сопряжена с высоким уровнем риска и может не подходить для всех инвесторов. Инвестиционная стоимость может, как увеличиваться, так и уменьшаться, и инвесторы могут потерять все свои вложенные средства. Компания ни при каких обстоятельствах не несет ответственности перед физическими или юридическими лицами за любые убытки или ущерб целиком или частично вызванные, являющиеся результатом, или имеющие отношение к любым операциям, связанным с CFD. <a href="#" className="copyright-info-link">Подробнее</a>
                        <br/>
                        © 2008—2016. Exness
                    </p>
                </div>
                <div className="copyright-icons">
                    <img src="./lib/images/sysec.png" className="copyright-icons-item" />
                    <img src="./lib/images/beliz.png" className="copyright-icons-item" />
                    <br className="copyright-icons-separator" />
                    <img src="./lib/images/icon-nqa.png" className="copyright-icons-item" />
                    <img src="./lib/images/icon-sm.png" className="copyright-icons-item" />
                    <img src="./lib/images/cascade.png" className="copyright-icons-item" />
                </div>
            </div>
        )
    }
}
