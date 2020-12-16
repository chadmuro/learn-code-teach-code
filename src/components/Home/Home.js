import React from 'react';
import './Home.scss';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import LatestArticles from './LatestArticles/LatestArticles';

const Home = () => {
	return (
		<div className="home" >
			<Hero />
			<Features />
			<FeaturedProject />
			<LatestArticles />
		</div>
	)
};

export default Home;
