import React from 'react';
import Page from './components/Page';
import pages from './pages';
import { Route } from 'react-router-dom';

export default [
	...pages.map((page, i) => {
		const { title, permalink } = page().props;

		return (
			<Route
				exact
				path={permalink ? permalink : Page.getPermalink(title)}
				component={page}
				key={i}
			/>
		);
	})
];
