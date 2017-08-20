import React from 'react';
import {basePage} from './style.scss';

export default (props) => (
	<div className={basePage}>
		{props.children}
	</div>
);
