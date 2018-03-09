import React from 'react';
import Page from './Page';
import styled from 'styled-components';

export default styled(Page)`
	padding-top: 50px;

	@media (max-width: 600px) {
		padding-top: 0;
	}

	img {
		display: block;
		padding: 0;
		width: 100%;
	}
`;
