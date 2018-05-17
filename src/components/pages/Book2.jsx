import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<AlbumPage
		title="Fashion photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/book-2"
	>
		<Photo file="book2/1.jpg" />
		<Photo file="book2/2.jpg" />
		<Photo file="book2/3.jpg" />
		<Photo file="book2/4.jpg" />
		<Photo file="book2/5.jpg" />
		<Photo file="book2/6.jpg" />
		<Photo file="book2/7.jpg" />
		<Photo file="book2/8.jpg" />
		<Photo file="book2/8A.jpg" />
		<Photo file="book2/9.jpg" />
		<Photo file="book2/10.jpg" />
		<Photo file="book2/11.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
