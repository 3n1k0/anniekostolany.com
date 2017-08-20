import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './style.scss';

export default () => (
	<div className={navigation}>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li><Link to="/couple">Couple</Link></li>
			<li><Link to="/fashion">Fashion</Link></li>
			<li><Link to="/babies">Babies</Link></li>
			<li><Link to="/personal">Personal</Link></li>
			<li><a href="https://instagram.com/anniekostolany" target="_blank">Instagram</a></li>
		</ul>
	</div>
);
