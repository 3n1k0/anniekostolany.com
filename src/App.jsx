import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ApplicationShell from './components/ApplicationShell';

import ContactPage from './components/pages/Contact';
import ThanksPage from './components/pages/Thanks';
import HomePage from './components/pages/Home';
import AboutMePage from './components/pages/AboutMe';
import PricingPage from './components/pages/Pricing';

import DreamyBeachAlbumPage from './components/pages/DreamyBeach';
import LostBrideAlbumPage from './components/pages/LostBride';
import RebellionAlbumPage from './components/pages/Rebellion';
import FashionConfessionAlbumPage from './components/pages/FashionConfession';
import ConfidenceIsKeyAlbumPage from './components/pages/ConfidenceIsKey';
import TropicalVibesAlbumPage from './components/pages/TropicalVibes';
import StreetStyleAlbumPage from './components/pages/StreetStyle';

import CoupleGermanyAlbumPage from './components/pages/CoupleGermany';
import CoupleHungaryAlbumPage from './components/pages/CoupleHungary';
import CoupleMiamiAlbumPage from './components/pages/CoupleMiami';

import LifestylePage from './components/pages/Lifestyle';
import ChildrenAlbumPage from './components/pages/Children';
import EventsPage from './components/pages/Events';

const history = createBrowserHistory();

history.listen((location) => {
	window.scrollTo(0, 0);
	window.ga('send', 'pageview', location.pathname);
	window.fbq('track', 'ViewContent');
});

export default () => (
	<Router history={history}>
		<ApplicationShell>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/contact" component={ContactPage} />
			<Route exact path="/thanks" component={ThanksPage} />
			<Route exact path="/about-me" component={AboutMePage} />
			<Route exact path="/pricing" component={PricingPage} />

			{/* Portraiture */}
			<Route exact path="/streetstyle" component={StreetStyleAlbumPage} />
			<Route exact path="/dreamy-beach" component={DreamyBeachAlbumPage} />
			<Route exact path="/lost-bride" component={LostBrideAlbumPage} />
			<Route exact path="/rebellion" component={RebellionAlbumPage} />
			<Route exact path="/fashion-confession" component={FashionConfessionAlbumPage} />
			<Route exact path="/confidence-is-key" component={ConfidenceIsKeyAlbumPage} />
			<Route exact path="/tropical-vibes" component={TropicalVibesAlbumPage} />

			{/* Couple shoots */}
			<Route exact path="/couple-germany" component={CoupleGermanyAlbumPage} />
			<Route exact path="/couple-hungary" component={CoupleHungaryAlbumPage} />
			<Route exact path="/couple-miami" component={CoupleMiamiAlbumPage} />

			{/* Family */}
			<Route exact path="/children" component={ChildrenAlbumPage} />
			<Route exact path="/lifestyle" component={LifestylePage} />
			<Route exact path="/events" component={EventsPage} />
		</ApplicationShell>
	</Router>
);
