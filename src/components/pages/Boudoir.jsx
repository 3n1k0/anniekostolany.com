import React from 'react';
import { Page, Photo } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page
		title="Boudoir session"
		description="It's the confidence booster every girls should try."
		image="boudoir/12.jpg"
	>
		<h2>Boudoir photo session</h2>
		<p>Book your own boudoir session now!</p>
		<Photo file="boudoir/1.jpg" />
		<Photo file="boudoir/2.jpg" />
		<Photo file="boudoir/3.jpg" />
		<Photo file="boudoir/4.jpg" />
		<Photo file="boudoir/5.jpg" />
		<Photo file="boudoir/6.jpg" />
		<Photo file="boudoir/7.jpg" />
		<Photo file="boudoir/8.jpg" />
		<Photo file="boudoir/9.jpg" />
		<Photo file="boudoir/10.jpg" />
		<Photo file="boudoir/11.jpg" />
		<Photo file="boudoir/12.jpg" />

		<BookNowButton />
	</Page>
);
