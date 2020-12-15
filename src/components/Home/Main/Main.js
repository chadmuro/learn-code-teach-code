import React, { useContext } from 'react';
import './Main.scss';
import { MediumContext } from '../../../contexts/MediumContext';
import Card from '../../Card/Card';

const Main = () => {
    const { posts, loading } = useContext(MediumContext);

    console.log(posts, loading);

    return (
        <div className="main">
            {posts && posts.map(post => {
                return (
                    <Card post={post} key={post.title}/>
                )
            })}
        </div>
    )
}

export default Main;
