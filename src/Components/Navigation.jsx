import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
	render() {
		return (
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about.html">About</Link></li>
				<li><Link to="/photos.html">Photos</Link></li>
			</ul>
		);
	}
}
