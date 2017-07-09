import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import PhotosPage from './components/PhotosPage';
import Navigation from './components/Navigation';

export default () => (
	<Router>
		<div>
			<Navigation/>
			<Route exact path="/" component={HomePage} />
			<Route path="/about.html" component={AboutPage} />
			<Route path="/photos.html" component={PhotosPage} />
		</div>
	</Router>
);
