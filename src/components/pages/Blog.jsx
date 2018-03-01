import React from 'react';
import blogPosts from '../../posts';
import Page from '../Page';
import styled from 'styled-components';
import BlogPostPreview from '../BlogPostPreview';

const Cell = styled.div`
	display: block;
	float: left;
	width: calc(50% - 1rem);

	&:nth-of-type(3n + 1) {
		padding-right: 1rem;
	}

	&:nth-of-type(3n + 2) {
		padding-left: 1rem;
	}

	@media (max-width: 768px) {
		float: initial;
		padding: 0 !important;
		width: 100%;
	}
`;

const ClearFix = styled.div`
	clear: both;
`;

export default () => (
	<Page title="Blog">
		{blogPosts.map((post, index) => {
			const { props } = post();
			return [
				<Cell>
					<BlogPostPreview {...props} />
				</Cell>,
				index % 2 === 1 ? <ClearFix /> : null
			];
		})}
		<ClearFix />
	</Page>
);
