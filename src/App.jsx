import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import CoupleAlbumPage from './components/pages/CoupleAlbumPage';
import FashionAlbumPage from './components/pages/FashionAlbumPage';
import PersonalAlbumPage from './components/pages/PersonalAlbumPage';
import Navigation from './components/Navigation';
import Logo from './components/Logo';

export default () => (
	<Router>
		<div>
			<Logo/>
			<Navigation/>
			<Route exact path="/" component={HomePage} />
			<Route path="/about.html" component={AboutPage} />
			<Route path="/fashion.html" component={FashionAlbumPage} />
			<Route path="/couple.html" component={CoupleAlbumPage} />
			<Route path="/personal.html" component={PersonalAlbumPage} />
		</div>
	</Router>
);
