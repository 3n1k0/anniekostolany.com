import React from 'react';
import { Page } from '../Page';
import { thanksPage } from './style.scss';

export default () => (
	<Page title="Thanks">
		<div className={thanksPage}>
			<h2>Thank you for your inquiry!</h2>
			<p>Your message has been sent successfully.</p>
		</div>
	</Page>
);
