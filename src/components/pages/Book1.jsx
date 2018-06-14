import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';
import PhotoSet from '../PhotoSet';

export default () => (
	<AlbumPage
		title="Fashion photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<Photo file="home/0.jpg" />
		<PhotoSet>
			<Photo file="home/1.jpg" />
			<Photo file="home/2.jpg" />
		</PhotoSet>
		<Photo file="home/4.jpg" />
		<Photo file="home/5.jpg" />
		<Photo file="home/6.jpg" />
		<Photo file="home/7.jpg" />
		<Photo file="home/8.jpg" />
		<Photo file="home/9.jpg" />
		<PhotoSet>
			<Photo file="home/10.jpg" />
			<Photo file="home/11.jpg" />
		</PhotoSet>
		<Photo file="home/12.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
