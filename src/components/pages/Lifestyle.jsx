import React from 'react';
import TextPage from './TextPage';
import { Link } from 'react-router-dom';
import BookNowButton from '../BookNowButton';

export default () => (
	<TextPage>
		<h2>Lifestyle</h2>

		<p>Check out <Link to="/pricing">my rates</Link> to see the amazing deal I figured out for you to make this fall really special!</p>

		<p>Do you have a beautiful family and super cute kids?</p> <p>Let's take some photos of them! The point of lifestyle photography is to capture the happiest everyday moments without too much stressing about planning the shoot.
			Let's meet in the cosiness of your home or at any other location chosen by you. This will show your taste, your style, your way of living. It tells your story.
		You will have nothing to do, except having fun with the people you love. This way I can promise that your photos will turn out to be really candid and natural.</p>

		<BookNowButton />
	</TextPage>
);
