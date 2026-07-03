import React from 'react';

export default function PasswordModal({ password, setPassword, confirmPassword, setConfirmPassword, onClose, onCreateAccount }) {
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