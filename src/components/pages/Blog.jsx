import React from 'react';
import blogPosts from '../../posts';
import { Page } from '../Page';

export default () => (
	<Page title="Blog">{blogPosts.map(Post => <Post />)}</Page>
);
