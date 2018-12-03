import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';
import PhotoSet from '../PhotoSet';

export default () => (

	<AlbumPage
		title="Fashion photography in Amsterdam"
		image="https://ucarecdn.com/0892bb72-72e2-4666-b661-697ed7c44cd9/2.jpg"
		permalink="/book-2"
	>

		<PhotoSet>
			<Photo file="https://ucarecdn.com/c2295fb3-fbd3-4490-8552-c6b61d74d80d/a.jpg" />
			<Photo file="https://ucarecdn.com/062b2747-d931-442f-abfb-595a33a68537/b.jpg" />
		</PhotoSet>

		<Photo file="https://ucarecdn.com/f2e00897-3a4d-4f5a-b717-3810995f4e3a/1.jpg" />
		<Photo file="https://ucarecdn.com/0892bb72-72e2-4666-b661-697ed7c44cd9/2.jpg" />
		<Photo file="https://ucarecdn.com/c9a2c86a-0a13-4663-a43e-d6a79970add5/3.jpg" />
		<Photo file="https://ucarecdn.com/a8e655ba-4a7b-4e21-88f5-7769f9bd8f26/4.jpg" />
		<Photo file="https://ucarecdn.com/a55ee5cf-d3c8-4b50-9bee-e49daa23a1dc/6.jpg" />
		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
