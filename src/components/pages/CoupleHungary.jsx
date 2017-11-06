import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<Photo file="couple_shoots_hun/3.jpg" alt="Couple sitting in nature"/>
		<Photo file="couple_shoots_hun/2.jpg" alt="Couple smiling in nature"/>
		<Photo file="couple_shoots_hun/4.jpg" alt="Couple sitting by bonfire"/>
		<Photo file="couple_shoots_hun/5.jpg" alt="Couple sitting by bonfire"/>
		<Photo file="couple_shoots_hun/6.jpg" alt="Couple laughing by bonfire"/>
		<Photo file="couple_shoots_hun/7.jpg" alt="Couple looking each other on long street"/>
		<BookNowButton />
	</Page>
);
