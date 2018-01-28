import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routes from './routes';
import App from './App';
import React from 'react';
import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';
import Template from './template';

const context = {};
const urlset = [];

routes.forEach(route => {
	const { path: routePath } = route.props;

	urlset.push(`<url><loc>https://anniekostolany.com${routePath}</loc></url>`);

	const content =
		'<!DOCTYPE html>' +
		ReactDOMServer.renderToString(
			<Template path={routePath}>
				<StaticRouter location={routePath} context={context}>
					<App />
				</StaticRouter>
			</Template>
		);

	mkdirp.sync('./out' + path.dirname(routePath));

	fs.writeFileSync(
		'./out' + (routePath === '/' ? '/index' : routePath) + '.html',
		content
	);
});

fs.writeFileSync(
	'./out/sitemap.xml',
	`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urlset.join('\n')}
		</urlset>
	`
);
