import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-brand">
                <span><span class="footer-u">u</span>devs</span>
                <p>
                    Помощник в публикации статей, журналов. Список популярных конференций.
                    Всё для студентов и преподавателей.
                </p>
                </div>

                <div className="footer-links">
                <div className="footer-column">
                    <h3>Ресурсы</h3>
                    <ul>
                    <li><a href="#">Статьи</a></li>
                    <li><a href="#">Журналы</a></li>
                    <li><a href="#">Газеты</a></li>
                    <li><a href="#">Диплом</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>О нас</h3>
                    <ul>
                    <li><a href="#">Контакты</a></li>
                    <li><a href="#">Помощь</a></li>
                    <li><a href="#">Блоги</a></li>
                    <li><a href="#">Политика</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Помощь</h3>
                    <ul>
                    <li><a href="#">Часто задаваемые вопросы</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2020. Logolipsum. All rights reserved.</p>
            </div>
        </footer>
    );
}