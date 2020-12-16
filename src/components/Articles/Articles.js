import React from 'react';
import PageHero from '../../layout/PageHero/PageHero';
import ArticleMain from '../../layout/ArticleMain/ArticleMain';

const Articles = () => {
	return (
		<div className="articles">
			<PageHero title="Articles" />
			<ArticleMain />
		</div>
	);
};

export default Articles;
