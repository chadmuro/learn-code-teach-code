import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero';
import Features from './Features/Features';

const Home = () => {
	return (
		<div className="home" >
			<Hero />
			<Features />
		</div>
	)
};

export default Home;
