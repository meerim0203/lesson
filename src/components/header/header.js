import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header--general">
                    <h1 className="header--general__logo">Портер<span>Такси</span></h1>

                    <nav className="header--general__navigation">
                        <a href="#">Тарифы</a>
                        <a href="#">Услуги</a>
                        <a href="#">Контакты</a>
                        <div className="header--general__navigation--group">

                            <div className="header--general__navigation--group__block">
                                <div className="fab fa-telegram"></div>
                                <div className="fab fa-whatsapp"></div>
                                <a href="tel:0504-41-68-33">0504-41-68-33</a>
                            </div>

                            <div className="header--general__navigation--group__block">
                                <div className="fab fa-telegram"></div>
                                <div className="fab fa-whatsapp"></div>
                                <a href="tel:0504-41-68-33">0504-41-68-33</a>
                            </div>

                        </div>

                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;

