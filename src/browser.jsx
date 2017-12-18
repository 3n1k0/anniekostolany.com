import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';

const history = createBrowserHistory();

history.listen((location) => {
	window.scrollTo(0, 0);
	window.ga('send', 'pageview', location.pathname);
	window.fbq('track', 'ViewContent');
});

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter history={history}>
				<Component />
			</BrowserRouter>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		const NextApp = require('./App.jsx').default;
		render(NextApp);
	});
}
