import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import styled from 'styled-components';

const ContactPage = styled.div`
	margin: 0 auto;
	padding-top: 50px;

	input,
	textarea {
		background: #ffffff;
		border: 1px solid #000000;
		border-radius: 0;
		color: #000000;
		font-size: 16px;
		margin: 10px 0;
		outline: none;
		padding: 10px;
		width: 100%;
	}

	textarea {
		height: 200px;
		resize: vertical;
	}

	input[name='_gotcha'] {
		display: none;
	}

	label {
		font-size: 16px;
		font-family: arial;
	}

	input[type='submit']:hover {
		background: #000000;
		color: #ffffff;
		cursor: pointer;
	}
`;

export default () => (
	<Page title="Contact">
		<ContactPage>
			<form
				action="https://formspree.io/eniko.kosztolanyi@gmail.com"
				method="POST"
			>
				<input
					type="hidden"
					name="_next"
					value="//anniekostolany.com/thanks"
				/>
				<input type="hidden" name="_format" value="plain" />
				<input type="text" name="_gotcha" />

				<label htmlFor="name">Your name:</label>
				<input type="text" name="name" />
				<label htmlFor="_replyto">Your e-mail address:</label>
				<input type="email" name="_replyto" />
				<label htmlFor="message">Message:</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</ContactPage>
	</Page>
);
