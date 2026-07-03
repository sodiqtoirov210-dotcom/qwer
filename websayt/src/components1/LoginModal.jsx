import React from 'react';

export default function LoginModal({ username, setUsername, selectedAvatar, setSelectedAvatar, avatars, onClose, onLogin }) {
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