import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage.jsx';
import AboutPage from './Components/AboutPage.jsx';
import PhotosPage from './Components/PhotosPage.jsx';
import Navigation from './Components/Navigation.jsx';
import style from './index.scss';

ReactDOM.render(
	<Router>
		<div>
			<Navigation/>
			<Route exact path="/" component={HomePage}/>
			<Route path="/about.html" component={AboutPage}/>
			<Route path="/photos.html" component={PhotosPage}/>
		</div>
	</Router>,
	document.getElementById('root')
);
