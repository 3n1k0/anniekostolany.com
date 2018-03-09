import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import PhotoSet from '../PhotoSet';
import CallToActionButton from '../CallToActionButton';
import PrettyLink from '../PrettyLink';

export default () => (
	<AlbumPage
		title="Portrait &amp; wedding Photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<PhotoSet>
			<PrettyLink
				to="/portraits"
				title="Lorem ipsum dolor sit amet"
				color="black"
				background="white"
				image="home/amanda2.jpg"
			>
				<Photo file="home/amanda2.jpg" />
			</PrettyLink>
			<Photo file="home/kady2.jpg" />
		</PhotoSet>

		<PrettyLink
			to="/portraits"
			title="Lorem ipsum dolor sit amet"
			color="white"
			background="black"
			image="home/zsofi.jpg"
		>
			<Photo file="home/zsofi.jpg" />
		</PrettyLink>
		<Photo file="home/11.jpg" />
		<Photo file="home/jillmermaid.jpg" />
		<PhotoSet>
			<Photo file="home/amanda6.jpg" />
			<Photo file="home/amanda3.jpg" />
		</PhotoSet>
		<Photo file="home/9.jpg" />
		<Photo file="home/menyasszonyok.jpg" />

		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
