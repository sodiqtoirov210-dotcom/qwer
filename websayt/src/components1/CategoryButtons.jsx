import React from 'react';

export default function CategoryButtons() {
    const categories = ['Все потоки', 'Разработка', 'Администрирование', 'Дизайн', 'Менеджмент', 'Маркетинг', 'Научпоп'];
    return (
        <div className="katlog">
        {categories.map((cat, index) => (
            <button key={index}>{cat}</button>
        ))}
        </div>
    );
}