import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<AlbumPage
		title="Publications"
		image="home/3.jpg"
		permalink="/publications"
	>
		<Photo file="home/3.jpg" />
		<Photo file="home/4.jpg" />
		<Photo file="home/5.jpg" />
		<Photo file="home/6.jpg" />
		<Photo file="home/7.jpg" />
		<Photo file="home/8.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
