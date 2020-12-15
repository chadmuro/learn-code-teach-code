import React from 'react';
import './PageHero.scss';

const PageHero = ({ title }) => {
    return (
        <div className="pagehero">
            <h1 className="pagehero__title">{title}</h1>
        </div>
    )
}

export default PageHero;
