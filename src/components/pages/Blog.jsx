import React from 'react';
import blogPosts from '../../posts';
import Page from '../Page';
import styled from 'styled-components';
import BlogPostPreview from '../BlogPostPreview';

const Cell = styled.div`
	display: block;
	float: left;
	width: 50%;

	@media (max-width: 768px) {
		float: initial;
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
	</Page>
);
