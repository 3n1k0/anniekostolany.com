import React from 'react';
import { Page, Photo } from './Page';
import { Link } from 'react-router-dom';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<h2>Lifestyle & Family Portraits</h2>
		<Photo file="coffee.jpg" alt="Girl drinking coffee"/>

		<p>Do you have a beautiful family and super cute kids? Let's take some photos of them! The point of lifestyle photography is to capture the happiest everyday moments without too much stressing about planning the shoot and forcing unnatural poses. Let's meet in the cosiness of your home or at any other place chosen by you. Picking the location shows your style, your unique taste, way of living. And what is the most important: it tells your story. You will have nothing to do, except having fun with the people you love. This way I can promise that your photos will turn out to be really candid and natural.
		My main locations are Haarlem & Amsterdam but I would be more than happy to travel to you.</p>

		<BookNowButton />
	</Page>
);
