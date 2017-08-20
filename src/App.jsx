import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CoupleAlbumPage from './components/pages/CoupleAlbumPage';
import FashionAlbumPage from './components/pages/FashionAlbumPage';
import PersonalAlbumPage from './components/pages/PersonalAlbumPage';
import BabiesAlbumPage from './components/pages/BabiesAlbumPage';
import ContactPage from './components/pages/ContactPage';
import ThanksPage from './components/pages/ThanksPage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

export default () => (
	<Router>
		<div>
			<Logo/>
			<Navigation/>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/contact" component={ContactPage} />
			<Route path="/about" component={AboutPage} />
			<Route path="/fashion" component={FashionAlbumPage} />
			<Route path="/couple" component={CoupleAlbumPage} />
			<Route path="/babies" component={BabiesAlbumPage} />
			<Route path="/personal" component={PersonalAlbumPage} />
			<Route path="/thanks" component={ThanksPage} />
		</div>
	</Router>
);
