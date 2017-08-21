import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from './style.scss';
import { Facebook, Instagram } from '../SocialIcons';

export default () => (
	<div className={navigation}>
		<h1>Annie Kostolany</h1>
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/couples">People in love</Link></li>
			<li><Link to="/portraits">Portraits</Link></li>
			<li><Link to="/children">Children</Link></li>
			<li><Link to="/personal">Personal</Link></li>
			<li><Link to="/contact">Contact</Link></li>
			<li><Facebook/><Instagram/></li>
		</ul>
	</div>
);
