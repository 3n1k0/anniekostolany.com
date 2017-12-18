import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import React from 'react';

const context = {};

console.log(ReactDOMServer.renderToString(
	<StaticRouter location="https://anniekostolany.com/" context={context}>
		<App />
	</StaticRouter>
));
