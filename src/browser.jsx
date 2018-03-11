import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';

const history = createBrowserHistory();

history.listen(location => {
	window.scrollTo(0, 0);
	window.ga('send', 'pageview', location.pathname);
});

const render = Component => {
	ReactDOM.hydrate(
		<AppContainer>
			<Router history={history}>
				<Component />
			</Router>
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
