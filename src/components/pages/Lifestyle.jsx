import React from 'react';
import { Page, Photo } from './Page';
import { Link } from 'react-router-dom';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="Capture the best moments of your life."
			/>
			<title>Lifestyle photography | Annie Kostolany</title>

			<meta
				property="og:title"
				content="Lifestyle photography| Annie Kostolany"
			/>
			<meta
				property="og:description"
				content="Capture the best moments of your life."
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/coffee.jpg"
			/>
		</Helmet>
		<h2> Lifestyle photography </h2>

		<Photo file="coffee.jpg" alt="Girl drinking coffee" />

		<p>
			Do you have a beautiful family and super cute kids? Let's take some
			photos of them!
			<br />The point of lifestyle photography is to capture the happiest
			everyday moments without stressing too much about planning the shoot
			and especially without forcing unnatural poses. Let's just meet in
			the cosiness of your home or at any other place you choose. Picking
			the location shows your style, your unique taste, way of living. And
			what is the most important: it tells your story.
			<br />You will have nothing to do, except having fun with the people
			you love. This way I can promise that your photos will turn out to
			be really candid and natural. My main locations are Haarlem &
			Amsterdam but I would be more than happy to travel to you.
		</p>

		<BookNowButton />
	</Page>
);
