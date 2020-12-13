import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero';
import Main from './Main/Main';

const Home = () => {
	return (
		<div className="home" >
			<Hero />
			<Main />
		</div>
	)
};

export default Home;
