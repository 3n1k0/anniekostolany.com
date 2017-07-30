import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './style.scss';

export default () => (
	<div className={navigation}>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about.html">About</Link></li>
			<li><Link to="/couple.html">Couple</Link></li>
			<li><Link to="/fashion.html">Fashion</Link></li>
			<li><Link to="/babies.html">Babies</Link></li>
			<li><Link to="/personal.html">Personal</Link></li>
		</ul>
	</div>
);
