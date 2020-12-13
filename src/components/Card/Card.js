import React from 'react';
import './Card.scss';

import card from '../../img/lctc-hero.jpg';

const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={card} alt="card image" className="card__image-source" />
            </div>
            <div className="card__content">
                <h3>Title of this project or article</h3>
            </div>
        </div>
    )
}

export default Card;
