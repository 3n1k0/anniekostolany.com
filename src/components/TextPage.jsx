import React from 'react';
import Page from './Page';
import styled from 'styled-components';

export default styled(Page)`
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	line-height: 1.5em;
	width: auto;

	h2 {
		font-weight: normal;
	}

	p {
		margin: 0;
		padding: 20px;
	}

	img {
		display: block;
		padding: 20px 0;
		width: 100%;
	}
`;
