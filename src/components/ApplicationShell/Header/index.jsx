import React from 'react';
import { header } from './style.scss';

export default (props) => (
	<div className={header}>
		{props.children}
	</div>
)
