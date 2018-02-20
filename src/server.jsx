import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { StaticRouter } from 'react-router';
import routes from './routes';
import App from './App';
import React from 'react';
import fs from 'fs';
import Helmet from 'react-helmet';
import mkdirp from 'mkdirp';
import path from 'path';

const context = {};
const urlset = [];

routes.forEach(route => {
	const { path: routePath } = route.props;

	console.log('render: ', routePath);

	const sheet = new ServerStyleSheet();

	const body = ReactDOMServer.renderToString(
		<StyleSheetManager sheet={sheet.instance}>
			<StaticRouter location={routePath} context={context}>
				<App />
			</StaticRouter>
		</StyleSheetManager>
	);
	const helmet = Helmet.renderStatic();
	const styleTags = sheet.getStyleTags();

	urlset.push(`<url><loc>https://anniekostolany.com${routePath}</loc></url>`);

	const content = `<!DOCTYPE html>
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				${helmet.link.toString()}

				<meta property="og:url" content="https://anniekostolany.com${routePath}" />
				<link rel="canonical" href="https://anniekostolany.com${routePath}" />

				<script>
				  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				  ga('create', 'UA-104984108-1', 'auto');
				  ga('send', 'pageview');
				</script>

				<!-- Facebook Pixel Code -->
				<script>
				  !function(f,b,e,v,n,t,s)
				  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
				  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
				  n.queue=[];t=b.createElement(e);t.async=!0;
				  t.src=v;s=b.getElementsByTagName(e)[0];
				  s.parentNode.insertBefore(t,s)}(window, document,'script',
				  'https://connect.facebook.net/en_US/fbevents.js');
				  fbq('init', '190552224845834');
				  fbq('track', 'PageView');
				</script>
				<noscript><img height="1" width="1" style="display:none"
				  src="https://www.facebook.com/tr?id=190552224845834&ev=PageView&noscript=1"
				/></noscript>
				<!-- End Facebook Pixel Code -->

				${styleTags}

				<link href="/bundle.css?${Date.now()}" rel="stylesheet" />
			</head>
			<body>
				<div id="root">${body}</div>
				<script type="text/javascript" src="/app.js?${Date.now()}"></script>
			</body>
		</html>`;

	mkdirp.sync('./out' + path.dirname(routePath));

	if (routePath === '/') {
		fs.writeFileSync('./out/index.html', content);
	} else if (routePath === '/blog') {
		mkdirp.sync('./out/blog');
		fs.writeFileSync('./out/blog/index.html', content);
	} else {
		fs.writeFileSync('./out' + routePath + '.html', content);
	}
});

fs.writeFileSync(
	'./out/sitemap.xml',
	`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${urlset.join('\n')}
		</urlset>
	`
);
