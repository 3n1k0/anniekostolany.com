import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	
	<AlbumPage
		title="Fashion photography in Amsterdam"
		image="home/2.jpg"
		permalink="/book-2"
	>
		<Photo file="book2/1.jpg" />
		<Photo file="book2/2.jpg" />
		<Photo file="book2/3.jpg" />
		<Photo file="book2/4.jpg" />
		<Photo file="book2/6.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
