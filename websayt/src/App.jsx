import React, { useState } from 'react';
import './App.css';
// Rasmlarni import qilish
import womenImg from './assets/women.png';
import schoolgirlImg from './assets/schoolgril.png';
import hendImg from './assets/hend.png';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // IMPORT QILINGAN RASMLARNI ISHLATISH
  const avatars = [womenImg, schoolgirlImg, hendImg, womenImg];

  const handleOpenLogin = () => setIsLoginModalOpen(true);
  const handleCloseLogin = () => setIsLoginModalOpen(false);
  const handleClosePassword = () => setIsPasswordModalOpen(false);

  const handleLogin = () => {
    if (username.trim() === '') {
      alert('Iltimos, ismingizni kiriting!');
      return;
    }
    if (!selectedAvatar) {
      alert('Iltimos, avatar tanlang!');
      return;
    }
    setIsLoginModalOpen(false);
    setIsPasswordModalOpen(true);
  };

  const handleCreateAccount = () => {
    if (password.trim() === '' || confirmPassword.trim() === '') {
      alert("Iltimos, parolni to'liq kiriting!");
      return;
    }
    if (password !== confirmPassword) {
      alert('Parollar mos kelmadi!');
      return;
    }
    if (password.length < 6) {
      alert("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      return;
    }
    alert('Akkaunt yaratildi! Xush kelibsiz, ' + username);
    setIsPasswordModalOpen(false);
  };

  return (
    <div className="App">
      <Header onOpenLogin={handleOpenLogin} />
      <CategoryButtons />
      <HistorySection />
      <MainContent />
      <Pagination />
      <Footer />

      {isLoginModalOpen && (
        <LoginModal
          username={username}
          setUsername={setUsername}
          selectedAvatar={selectedAvatar}
          setSelectedAvatar={setSelectedAvatar}
          avatars={avatars}
          onClose={handleCloseLogin}
          onLogin={handleLogin}
        />
      )}

      {isPasswordModalOpen && (
        <PasswordModal
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          onClose={handleClosePassword}
          onCreateAccount={handleCreateAccount}
        />
      )}
    </div>
  );
}

// Header komponenti
function Header({ onOpenLogin }) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-u">u</span>devs
      </div>
      <div className="header-right">
        <button className="ring">🔔</button>
        <button className="Login" onClick={onOpenLogin}>Войти</button>
      </div>
    </header>
  );
}

// Kategoriya tugmalari
function CategoryButtons() {
  const categories = ['main', 'razrabotka', 'adminstratsiya', 'dizayn', 'menejment', 'marketing', 'nauchop'];
  return (
    <div className="katlog">
      {categories.map((cat, index) => (
        <button key={index}>{cat}</button>
      ))}
    </div>
  );
}

// History (tarix) qismi - IMPORT QILINGAN RASMLARNI ISHLATISH
function HistorySection() {
  // Import qilingan rasmlarni ishlatish
  const images = [schoolgirlImg, hendImg, womenImg, schoolgirlImg, womenImg];
  
  return (
    <div className="history">
      <div className="matn">istotya poclednix novostey</div>
      <div className="istory">
        {images.map((src, index) => (
          <div className="img-ring" key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Asosiy kontent - IMPORT QILINGAN RASMLARNI ISHLATISH
function MainContent() {
  const images = [womenImg, schoolgirlImg, hendImg, womenImg];
  
  const boxes = Array(3).fill(null).map((_, boxIndex) => (
    <div className="box" key={boxIndex}>
      {images.map((src, imgIndex) => (
        <div className="inbox" key={imgIndex}>
          <img src={src} alt="" />
          <div className="inbox-content">
            <span className="inbox-date">18:26 11.02.2021 | 356</span>
            <p className="inbox-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eveniet.</p>
          </div>
        </div>
      ))}
    </div>
  ));
  
  return <div className="main">{boxes}</div>;
}

// Pagination (sahifalar)
function Pagination() {
  const pages = ['\\', '1', '2', '3', '4', '5', '...', '86', '/'];
  return (
    <div className="controller">
      {pages.map((page, index) => (
        <button key={index}>{page}</button>
      ))}
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-u">u</span>devs
          <p>Помощник в публикации статей, журналов. Список популярных конференций. Всё для студентов и преподавателей.</p>
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
      <div className="footer-bottom">
        <p>Copyright © 2020. Logolipsum. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Login modal
function LoginModal({ username, setUsername, selectedAvatar, setSelectedAvatar, avatars, onClose, onLogin }) {
  return (
    <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-card">
        <button className="close-modal-btn" onClick={onClose}>&times;</button>
        <h2>Как вас зовут?</h2>
        <input
          type="text"
          placeholder="Введите имя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onLogin(); }}
        />
        <div className="avatar-section">
          <p>Выберите аватар</p>
          <div className="avatar-list">
            {avatars.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="avatar"
                className={selectedAvatar === src ? 'selected' : ''}
                onClick={() => setSelectedAvatar(src)}
              />
            ))}
          </div>
        </div>
        <button className="login-btn" onClick={onLogin}>Войти</button>
      </div>
    </div>
  );
}

// Password modal
function PasswordModal({ password, setPassword, confirmPassword, setConfirmPassword, onClose, onCreateAccount }) {
  return (
    <div className="modal2-overaly active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="model2-card">
        <button className="close-modal-btn" onClick={onClose}>&times;</button>
        <h2>Придумай пароль для входа</h2>
        <input
          type="password"
          placeholder="Придумайте пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="login-btn" onClick={onCreateAccount}>Создать аккаунт</button>
      </div>
    </div>
  );
}

export default App;