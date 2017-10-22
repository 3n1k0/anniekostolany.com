import React from 'react';
import TextPage from './TextPage';
import { Link } from 'react-router-dom';
import BookNowButton from '../BookNowButton';

export default () => (
	<TextPage>
		<h2>Lifestyle</h2>

		<p>Check out <Link to="/pricing">my rates</Link> to see the amazing deal I figured out for you to make this fall really special!</p>

		<p>Do you have a beautiful family and super cute kids?  Let's take some photos of them!</p>

		<p>I, personally always get intimidated by studio shoots, and I truly believe that they are not so very personal. The environment doesn't help you to fully express your personality and posing can be unnatural for someone who's not used to it.</p>

		<p>Instead of all this fuss, let’s gather your family and have some hot chocolate together! <br /> We can either meet in the safety of your home or walk together to a nice cafe place in Amsterdam. <br /> You will have nothing to do, except having fun with the people you love. <br /> This way I can promise that your photos will be truly candid and natural.</p>

		<BookNowButton />
	</TextPage>
);
