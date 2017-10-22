import React from 'react';
import {textPage} from './style.scss';

export default (props) => (
	<div className={textPage}>
		{props.children}
	</div>
);
