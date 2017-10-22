import React from 'react';
import TextPage from './TextPage';
import BookNowButton from '../BookNowButton';

export default () => (
	<TextPage>
		<h2>Pricing</h2>

		<h3>SALE!</h3>

		<p>All photo sessions booked until 15th November (engagement, family and baby portraits) are discounted by 50%.</p>

		<p>Instead of 180 EUR it is ONLY 99 EUR. (excl. btw.)</p>

		<ul>
			<li>1-1.5 hours of shooting</li>
			<li>Password protected online gallery</li>
			<li>25 high resolution images</li>
		</ul>

		<h3>So how does this work?</h3>

		<p>After we discuss you ideas, we pick the best time for the shooting.<br />It will take maximum 1.5 hours and we will be having a lot of fun! <br /> In 3-4 days I will send you a selection of preview images (not the full resolution yet). <br /> From these, you will be able to pick 25 of your favourite photos, which I`ll edit to perfection. <br /> It's really quick and simple.</p>

		<p>If you have any more questions, feel free to email me at info@anniekostolany.com or by filling out the contact form.</p>

		<p>Maximum delivery time takes up to 14 days. <br /> Event photography is excluded from promotion. All events are individually priced based on location, number of people and length of the period you need me to be there.</p>

		<BookNowButton />
	</TextPage>
);
