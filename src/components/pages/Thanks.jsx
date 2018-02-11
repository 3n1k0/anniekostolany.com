import React from 'react';
import { Page } from '../Page';
import styled from 'styled-components';

const ThanksPage = styled.div`
	text-align: center;

	h2 {
		font-family: Cardo, serif;
		font-size: 28px;
		font-weight: lighter;
	}

	p {
		font-family: sans-serif;
		font-size: 16px;
	}
`;

export default () => (
	<Page title="Thanks">
		<ThanksPage>
			<h2>Thank you for your inquiry!</h2>
			<p>Your message has been sent successfully.</p>
		</ThanksPage>
	</Page>
);
