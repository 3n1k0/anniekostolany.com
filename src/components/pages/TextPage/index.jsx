import React from 'react';
import {textPage} from './style.scss';
import BookNowButton from '../../BookNowButton';
import BasePage from '../BasePage';

export default (props) => (
	<BasePage>
		<div className={textPage}>
			{props.children}
			<BookNowButton />
		</div>
	</BasePage>
);
