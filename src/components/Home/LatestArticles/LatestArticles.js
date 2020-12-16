import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './LatestArticles.scss';
import { MediumContext } from '../../../contexts/MediumContext';

const LatestArticles = () => {
	const { homePosts } = useContext(MediumContext);

	const openNewTab = url => {
		const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
		if (newWindow) newWindow.opener = null;
	};

	return (
		<div className="latestarticles">
			<div className="latestarticles__content">
				<div className="latestarticles__content-links">
					{homePosts &&
						homePosts.map(post => {
							return (
								<h3
									key={post.title}
									onClick={() => openNewTab(post.link)}
									className="latestarticles__content-link"
								>
									{post.title}
								</h3>
							);
						})}
				</div>
				<div className="latestarticles__content-title">
					<h3 className="title">Latest Articles</h3>
					<Link to="articles" className="button-link">View All Articles</Link>
				</div>
			</div>
		</div>
	);
};

export default LatestArticles;
