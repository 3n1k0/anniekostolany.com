import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/home/zsofi.jpg"
			/>
		</Helmet>
		<Photo file="home/zsofi.jpg" />
		<Photo file="home/jillmermaid.jpg" />
		<Photo file="home/anna.jpg" />
		<Photo file="home/nivine2.jpg" />
		<Photo file="home/zsofia.jpg" />
		<Photo file="home/nivine3.jpg" />
		<Photo file="home/zsofifuveszkert.jpg" />
		<Photo file="home/evi.jpg" />
		<Photo file="home/stephanie.jpg" />
		<Photo file="home/jillsunset.jpg" />
		<BookNowButton />
	</Page>
);
