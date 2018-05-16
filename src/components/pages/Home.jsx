import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<AlbumPage
		title="Portrait &amp; Lifestyle Photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<Photo file="home/amanda2.jpg" />
		<Photo file="home/kady2.jpg" />
		<Photo file="home/zsofi.jpg" />
		<Photo file="home/11.jpg" />
		<Photo file="home/jillmermaid.jpg" />
		<Photo file="home/amanda3.jpg" />
		<Photo file="home/amanda6.jpg" />
		<Photo file="home/9.jpg" />
		<Photo file="home/menyasszonyok.jpg" />
		<Photo file="home/9.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
