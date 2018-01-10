import React from 'react';
import { page } from './style.scss';

export var Photo = props => (
	<img
		src={'https://anniekostolany.com/images/' + props.file}
		alt={props.alt}
	/>
);

export var Page = props => <div className={page}>{props.children}</div>;
