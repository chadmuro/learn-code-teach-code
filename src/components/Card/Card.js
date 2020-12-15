import React from 'react';
import './Card.scss';

const Card = ({ post }) => {
    const openNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    return (
        <div className="card" onClick={() => openNewTab(post.link)}>
            <div className="card__image">
                <img src={post.thumbnail} alt="card" className="card__image-source" />
            </div>
            <div className="card__content">
                <h3>{post.title}</h3>
            </div>
        </div>
    )
}

export default Card;
