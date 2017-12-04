import React from 'react';
import { Page } from './Page';
import BookNowButton from '../BookNowButton';
import RatesDownloadLink from '../RatesDownloadLink';

export default () => (
	<Page>
		
		<p>“It’s one thing to make a picture of what a person looks like, it’s another thing to make a portrait of who they are.”</p>
		– Paul Caponigro
		<h3>Investment</h3>

		<h2>Children Holiday Minis</h2>
		<Photo file="cicuka-2.jpg" alt="Christmas cat"/>
		
		<p>
			<ul>
				<li>Perfect as Christmas card to family members and friends</li>
				<li>1-3 children in one set</li>
				<li>Christmas-styled (fairy lights, really cute decoration!)</li>
				<li>In my home-studio in Haarlem, really close to the train station</li>
				<li>Relaxed environment</li>
				<li>30 minutes</li>
				<li>6 hand edited, high-resolution images</li>
			</ul>
		</p>

		<p>For more information and detailed prices please send me an email to mail@anniekostolany.com or fill out the contact form below. Just say hello and feel free to tell me a little bit more about your ideas and plans.</p>
	
<BookNowButton />
	</Page>
);
