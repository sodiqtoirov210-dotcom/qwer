
import React from 'react';
import './new.css'; 

const Logo = () => (
    <div className="logo">
        <span className="logo_u">u</span>devs
    </div>
);

const Header = () => {
    const onOpenLogin = () => {
        console.log('Login clicked');
        // alert('Login modal open');
    };

    return (
        <header className="header">
            <Logo />
            <div className="katlog">
                <button>Все потоки</button>
                <button>Разработка</button>
                <button>Администрирование</button>
                <button>Дизайн</button>
                <button>Менеджмент</button>
                <button>Маркетинг</button>
                <button>Научпоп</button>
            </div>
            <div className="header_right">
                <button className="Login" onClick={onOpenLogin}>Войти</button>
            </div>
        </header>
    );
};


const Avatar = () => {
    return (
        <div className="in_avatar">
            <img 
                src="https://picsum.photos/seed/dilorom/400/400" 
                alt="Dilorom Alieva" 
            />
            <p>Dilorom Alieva</p>
            <div className="avat_button">
                <button className="follow">Follow</button>
                <button className="sev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077FF">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const NewsContent = () => {
    return (
        <div className="news">
            <img 
                src="https://picsum.photos/seed/industria/1200/500" 
                alt="Молодёжная индустриальная зона" 
            />
            <div className="news_h">
                <span className="inbox-date">18:26 11.02.2021 | 356</span>
                <h2 className="inbox-title">
                    Разместите свои инвестиционные проекты в молодёжных индустриальных зонах!
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias exercitationem est eos inventore cumque debitis veritatis 
                    eum natus fugit. Ut, ipsum omnis! Enim cumque reprehenderit, 
                    facilis nemo debitis voluptatum deserunt optio tempore, quae 
                    suscipit minus dolorem! Error voluptatem tempora eius dolor 
                    quam nulla dicta consequuntur magni harum, reiciendis expedita 
                    cupiditate quidem. Unde quos qui similique beatae impedit non, 
                    voluptates laudantium voluptas id doloremque veniam voluptate 
                    totam excepturi, ipsum ducimus ad placeat, dolorem ea reiciendis 
                    atque recusandae repudiandae? Odio illo a error velit facilis 
                    quibusdam culpa nulla accusantium consectetur, neque dolores 
                    odit, non possimus laudantium excepturi ea. Eos placeat pariatur 
                    commodi, rem, ipsum numquam possimus adipisci quod illum ab 
                    debitis praesentium, velit ratione? Ratione a non cumque 
                    accusantium sed ullam? Suscipit enim officia explicabo at 
                    dolor consectetur adipisci? Eos obcaecati praesentium blanditiis 
                    molestias. Aliquid in atque similique ex maxime quod accusamus 
                    perferendis, esse quis voluptatibus, nobis sint maiores sapiente 
                    sed aliquam pariatur quos at. Nihil libero sequi deleniti totam 
                    expedita explicabo animi, porro aliquam aliquid error ducimus hic. 
                    Nam quos quis explicabo impedit totam atque, vitae sit culpa 
                    nesciunt sint ipsum sapiente alias fugit voluptas modi quo placeat 
                    natus perspiciatis optio cum quidem sunt consectetur. Veniam 
                    possimus adipisci labore repudiandae, eveniet autem veritatis 
                    reprehenderit tempore doloribus dignissimos itaque, eos inventore 
                    ut quam soluta cupiditate nobis dicta reiciendis blanditiis 
                    temporibus. Nulla facere nisi, id ut illum enim ex a repudiandae, 
                    pariatur, illo excepturi ipsum tempore corporis harum eum? 
                    Voluptatibus facilis perferendis suscipit saepe omnis vel! 
                    Eum, doloribus esse animi deserunt, quos perferendis sapiente, 
                    praesentium ipsam vero qui ex aspernatur? Nisi aperiam et, id 
                    vel, omnis cum enim veritatis, unde laudantium quisquam 
                    praesentium nemo velit explicabo neque rerum nobis obcaecati 
                    repudiandae magni reiciendis cumque. Voluptate aliquid ut 
                    exercitationem labore fuga eaque, cum aperiam facilis amet 
                    similique praesentium possimus tempora minus consequatur 
                    assumenda debitis!
                </p>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                {/* Левая часть: бренд + описание */}
                <div className="footer-brand">
                    <span>
                        <span className="footer-u">u</span>devs
                    </span>
                    <p>
                        Помощник в публикации статей, журналов. Список популярных конференций.
                        Всё для студентов и преподавателей.
                    </p>
                </div>

                {/* Правая часть: 3 колонки ссылок */}
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
                            <li><a href="#">Заявки</a></li>
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

            {/* Нижняя линия (копирайт) */}
            <div className="footer-bottom">
                <p>Copyright © 2020. Logolipsum. All rights reserved.</p>
            </div>
        </footer>
    );
};

const App = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Avatar />
                <NewsContent />
            </main>
            <Footer />
        </>
    );
};

export default App;