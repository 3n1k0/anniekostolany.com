import React from 'react';
import { Page, Photo } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Portrait &amp; wedding Photography in Haarlem"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<Photo file="home/amanda2.jpg" />
		<Photo file="home/zsofi.jpg" />
		<Photo file="home/amanda6.jpg" />
		<Photo file="home/11.jpg" />
		<Photo file="home/jillmermaid.jpg" />
		<Photo file="home/kady2.jpg" />
		<Photo file="home/9.jpg" />
		<BookNowButton />
	</Page>
);
