import React from 'react';
import './Hero.scss';
import '../../../sass/components.scss';
import hero from '../../../img/lctc-hero.mp4';

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero__video">
				<video className="hero__video-content" autoPlay muted loop>
					<source src={hero} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>

            <div className="hero__title">
                <h1>Learn Code, Teach Code</h1>
                <p>Anyone can learn code by teaching code</p>
                <button className="button">Projects</button>
            </div>
		</div>
	);
};

export default Hero;
