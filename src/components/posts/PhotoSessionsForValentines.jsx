import { BlogPost, Photo } from '../BlogPost';
import React from 'react';

export default () => (
	<BlogPost
		title="A gift to remember - unique photo sessions for Valentine's!"
		description="Couple photo sessions are the perfect opportunity for everybody,
		especially for those who struggle a lot finding a nice and
		meaningful present."
		date="2018-02-10"
		permalink="valentines-gift"
	>
		<p>Are you looking for a simple yet amazing gift for Valentines?</p>

		<p>
			Couple photo sessions are the perfect opportunity for everybody,
			especially for those who struggle a lot finding a nice and
			meaningful present. You can send our carefully designed gift voucher
			in email or you can print it out and slide it in a nice envelope to
			make it even more personal.
		</p>

		<Photo file="kupon-1.jpg" />

		<p>
			The voucher may be redeemed anytime during the year with a short
			consultation beforehand. We will talk about your styles and ideas to
			figure out the perfect location and settings. Doesn't matter if
			you're a real romantic or you prefer minimalism, the photos will
			represent your style and personality.
		</p>

		<p>What is included?</p>

		<ul>
			<li>2-hours shooting</li>
			<li>2-3 locations of your choice</li>
			<li>2 outfits</li>
			<li>35 retouched digital photos in high resolution</li>
			<li>Password-protected online gallery</li>
			<li>Tastefully designed printable voucher</li>
		</ul>

		<p>
			If it all sounds good to you, please send me an email to
			mail@anniekostolany.com to get detailed instructions about the
			purchase. It's important that Valentine's vouchers are available in
			a limited number only and they will be sent out on a first-come
			first-served basis. Feel free to contact me if you have any more
			questions left.
		</p>
	</BlogPost>
);
