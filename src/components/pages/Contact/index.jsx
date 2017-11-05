import React from 'react';
import Page from '../Page';
import {contactPage} from './style.scss';

export default () => (
	<Page>
		<div className={contactPage}>
			<form action="https://formspree.io/eniko.kosztolanyi@gmail.com" method="POST">
				<input type="hidden" name="_next" value="//anniekostolany.com/thanks" />
				<input type="hidden" name="_format" value="plain" />
				<input type="text" name="_gotcha" />

				<label htmlFor="name">Your name:</label>
				<input type="text" name="name" />
				<label htmlFor="_replyto">Your e-mail address:</label>
				<input type="email" name="_replyto" />
				<label htmlFor="message">Message:</label>
				<textarea name="message"></textarea>
				<input type="submit" value="Send" />
				</form>
		</div>
	</Page>
);
