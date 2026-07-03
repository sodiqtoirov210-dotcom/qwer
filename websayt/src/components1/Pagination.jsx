import React from 'react';

export default function Pagination() {
    const pages = ['<', '1', '2', '3', '4', '5', '...', '86', '>'];
    return (
        <div className="controller">
        {pages.map((page, index) => (
            <button key={index}>{page}</button>
        ))}
        </div>
    );
}