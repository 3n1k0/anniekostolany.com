import React from 'react';
import TextPage from '../TextPage';
import {thanksPage} from './style.scss';

export default () => (
	<TextPage>
		<div className={thanksPage}>
			<h2>Thank you for your inquiry!</h2>
			<p>Your message has been sent successfully.</p>
		</div>
	</TextPage>
);
