import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<Photo file="confidence_is_key/viragok.jpg" />
		<Photo file="confidence_is_key/racsok.jpg" />
		<Photo file="confidence_is_key/hmcs1.jpg" />
		<Photo file="confidence_is_key/hmcs2.jpg" />
		<Photo file="confidence_is_key/matiasorange.jpg" />
		<Photo file="confidence_is_key/tamaszkodos.jpg" />
		<Photo file="confidence_is_key/legjobb.jpg" />
		<BookNowButton />
	</Page>
);
