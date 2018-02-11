import React from 'react';
import { Page } from './components/Page';
import { BlogPost } from './components/BlogPost';
import pages from './pages';
import posts from './posts';
import { Route } from 'react-router-dom';

export default [
	...posts.map((post, i) => {
		const { title, date, permalink } = post().props;

		return (
			<Route
				exact
				path={'/blog/' + BlogPost.getPermalink(date, title)}
				component={post}
				key={i}
			/>
		);
	}),

	...pages.map((page, i) => {
		const { title, permalink } = page().props;

		return (
			<Route
				exact
				path={permalink ? permalink : Page.getPermalink(title)}
				component={page}
				key={i + posts.length}
			/>
		);
	})
];
