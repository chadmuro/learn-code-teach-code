import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProject.scss';
import Card from '../../Pages/Card/Card';

const FeaturedProject = () => {
    return (
			<div className="featuredproject">
				<div className="featuredproject__content">
					<div className="featuredproject__content-title">
						<h3 className="title">Featured Project</h3>
						<h4>Todo List with HTML, CSS, and Vanilla JavaScript</h4>
						<p>
							Learn basic HTML, CSS, JavaScript, and how to work with local
							storage.
						</p>
						<p>Level: Beginner</p>
						<Link to="/projects" className="button-link">
							View All Projects
						</Link>
					</div>
					<div className="featuredproject__card">
						<Card
							post={{
								link: '/',
								thumbnail: '/',
								title:
									'Build a Todo List with HTML, CSS, and Vanilla JavaScript',
							}}
						/>
					</div>
				</div>
			</div>
		);
}

export default FeaturedProject;
