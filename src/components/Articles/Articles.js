import React from 'react';
import PageHero from '../Pages/PageHero/PageHero';
import ArticleMain from './ArticleMain/ArticleMain';

const Articles = () => {
	return (
		<div className="articles">
			<PageHero title="Articles" />
			<ArticleMain />
		</div>
	);
};

export default Articles;
