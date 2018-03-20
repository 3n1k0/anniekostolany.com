import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import PhotoSet from '../PhotoSet';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Portrait &amp; Lifestyle Photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<PhotoSet>
			<Photo file="home/amanda2.jpg" />
			<Photo file="home/kady2.jpg" />
		</PhotoSet>
		<Photo file="home/zsofi.jpg" />
		<Photo file="home/11.jpg" />
		<Photo file="home/jillmermaid.jpg" />
		<PhotoSet>
			<Photo file="home/amanda6.jpg" />
			<Photo file="home/amanda3.jpg" />
		</PhotoSet>
		<Photo file="home/9.jpg" />
		<Photo file="home/menyasszonyok.jpg" />
		<BookNowButton />
	</Page>
);
