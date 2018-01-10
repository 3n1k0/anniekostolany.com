import React from 'react';
import { bookNowButton } from './style.scss';
import { Link } from 'react-router-dom';

export default () => (
	<div className={bookNowButton}>
		<Link to="/contact">Book now</Link>
	</div>
);
