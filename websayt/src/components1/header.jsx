import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <span className="logo_u">u</span>devs
            </div>

            <div className="katlog">
                <button>Все потоки</button>
                <button>Разработка</button>
                <button>Администрирование</button>
                <button>Дизайн</button>
                <button>Менеджмент</button>
                <button>Маркетинг</button>
                <button>Научпоп</button>
            </div>

            <button className="Login">Войти</button>
    </header>
    );
}