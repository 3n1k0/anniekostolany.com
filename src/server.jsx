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

				<!-- Facebook SDK -->
				<script>
				  window.fbAsyncInit = function() {
				    FB.init({
				      appId            : '198784207521209',
				      autoLogAppEvents : true,
				      xfbml            : true,
				      version          : 'v2.12'
				    });
				  };

				  (function(d, s, id){
				     var js, fjs = d.getElementsByTagName(s)[0];
				     if (d.getElementById(id)) {return;}
				     js = d.createElement(s); js.id = id;
				     js.src = "https://connect.facebook.net/en_US/sdk.js";
				     fjs.parentNode.insertBefore(js, fjs);
				   }(document, 'script', 'facebook-jssdk'));
				</script>

				<script>
					window.fbAsyncInit = function() {
						FB.init({
							appId            : 'your-app-id',
							autoLogAppEvents : true,
							xfbml            : true,
							version          : 'v2.12'
						});
					};
					(function(d, s, id){
						var js, fjs = d.getElementsByTagName(s)[0];
						if (d.getElementById(id)) {return;}
						js = d.createElement(s); js.id = id;
						js.src = "https://connect.facebook.net/en_US/sdk.js";
						fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));
				</script>

				<!-- Facebook SDK -->

				${styleTags}

				<link href="/bundle.css?${Date.now()}" rel="stylesheet" />
			</head>
			<body>
				<div id="root">${body}</div>
				<div class="fb-customerchat"
					page_id="1389097571179740"
					theme_color="#0084ff"
				>
				</div>

				<script type="text/javascript" src="/app.js?${Date.now()}"></script>
			</body>
		</html>`;

	mkdirp.sync('./out' + path.dirname(routePath));

	if (routePath === '/') {
		fs.writeFileSync('./out/index.html', content);
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
