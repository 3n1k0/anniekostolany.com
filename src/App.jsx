import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CoupleAlbumPage from './components/pages/CoupleAlbumPage';
import PortraitAlbumPage from './components/pages/PortraitAlbumPage';
import PersonalAlbumPage from './components/pages/PersonalAlbumPage';
import ChildrenAlbumPage from './components/pages/ChildrenAlbumPage';
import ContactPage from './components/pages/ContactPage';
import ThanksPage from './components/pages/ThanksPage';
import Navigation from './components/Navigation';
import createBrowserHistory from 'history/createBrowserHistory';
import './style.scss';

const history = createBrowserHistory();

history.listen((location, action) => {
	window.scrollTo(0, 0);
	ga('send', 'pageview', location.pathname);
});

export default () => (
	<Router history={history}>
		<div>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/contact" component={ContactPage} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/portraits" component={PortraitAlbumPage} />
			<Route exact path="/couples" component={CoupleAlbumPage} />
			<Route exact path="/children" component={ChildrenAlbumPage} />
			<Route exact path="/personal" component={PersonalAlbumPage} />
			<Route exact path="/thanks" component={ThanksPage} />
			<Navigation/>
		</div>
	</Router>
);
