import React from 'react';
import Page from './Page';
import styled from 'styled-components';

export default styled(Page)`
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5;
	padding-top: 50px;
	width: auto;

	@media (max-width: 600px) {
		padding-top: 0;
	}

	h2,
	h3 {
		font-weight: normal;
		margin: 0;
		padding: 20px;
	}

	p {
		margin: 0;
		padding: 0 0 20px 0;
	}

	img {
		display: block;
		padding: 0 0 20px 0;
		width: 100%;
	}
`;
