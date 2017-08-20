import React from 'react';
import BasePage from '../BasePage';
import {thanksPage} from './style.scss';

export default () => (
	<BasePage>
		<div className={thanksPage}>
			<h2>Thank you for your inquiry!</h2>
			<p>Your message has been sent successfully.</p>
		</div>
	</BasePage>
);
