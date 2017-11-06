import React from 'react';
import { menuButton } from './style.scss';

export default (props) => (
	<div className={menuButton} onClick={props.onClick}>
		<i className="fa fa-bars"></i>
	</div>
);
