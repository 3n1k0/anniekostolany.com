import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';
import PhotoSet from '../PhotoSet';

export default () => (
	<AlbumPage
		title="Fashion photography in Amsterdam"
		image="https://ucarecdn.com/5c13afea-cdc8-4541-8411-1e5bae9b573c/3.jpg"
		permalink="/"
	>
		<PhotoSet>
			<Photo file="https://ucarecdn.com/11224c8a-97e2-4d23-9799-cb70a4497d6b/1.jpg" />
			<Photo file="https://ucarecdn.com/c2bacb36-bde1-490d-aacb-23b2388d7fea/2.jpg" />
		</PhotoSet>
		<Photo file="https://ucarecdn.com/5c13afea-cdc8-4541-8411-1e5bae9b573c/3.jpg" />
		<Photo file="https://ucarecdn.com/eb0c538c-50c1-4254-81d7-5c44b8d8b1a6/4.jpg" />
		<Photo file="https://ucarecdn.com/d1582a26-299d-462b-bda3-dd704a83d7b3/5.jpg" />
		<Photo file="https://ucarecdn.com/a95b4047-2d94-4628-b783-df1ef9032633/6.jpg" />
		<Photo file="https://ucarecdn.com/9ae5f1c5-c016-4812-8644-affcb542d965/7.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
