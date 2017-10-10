import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ThanksPage from './components/pages/ThanksPage';
import Navigation from './components/Navigation';
import createBrowserHistory from 'history/createBrowserHistory';
import MyStoryPage from './components/pages/MyStoryPage';
import RatesPage from './components/pages/RatesPage';
import EventsLifestylePage from './components/pages/EventsLifestylePage';

import DreamyBeachAlbumPage from './components/pages/albums/DreamyBeach';
import LostBrideAlbumPage from './components/pages/albums/LostBride';
import RebellionAlbumPage from './components/pages/albums/Rebellion';
import FashionConfessionAlbumPage from './components/pages/albums/FashionConfession';
import ConfidenceIsKeyAlbumPage from './components/pages/albums/ConfidenceIsKey';
import TropicalVibesAlbumPage from './components/pages/albums/TropicalVibes';
import CoupleShootsAlbumPage from './components/pages/albums/CoupleShoots';
import ChildrenAlbumPage from './components/pages/albums/Children';

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
			<Route exact path="/thanks" component={ThanksPage} />
			<Route exact path="/my-story" component={MyStoryPage} />
			<Route exact path="/rates" component={RatesPage} />
			<Route exact path="/events-and-lifestyle" component={EventsLifestylePage} />

			<Route exact path="/dreamy-beach" component={DreamyBeachAlbumPage} />
			<Route exact path="/lost-bride" component={LostBrideAlbumPage} />
			<Route exact path="/rebellion" component={RebellionAlbumPage} />
			<Route exact path="/fashion-confession" component={FashionConfessionAlbumPage} />
			<Route exact path="/confidence-is-key" component={ConfidenceIsKeyAlbumPage} />
			<Route exact path="/tropical-vibes" component={TropicalVibesAlbumPage} />
			<Route exact path="/couple-shoots" component={CoupleShootsAlbumPage} />
			<Route exact path="/children" component={ChildrenAlbumPage} />

			<Navigation/>
		</div>
	</Router>
);
