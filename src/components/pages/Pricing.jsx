import React from 'react';
import { Page } from './Page';
import BookNowButton from '../BookNowButton';
import RatesDownloadLink from '../RatesDownloadLink';

export default () => (
	<Page>
		<h3>Rates</h3>

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

		<p>For more information and detailed prices please see the following document: <RatesDownloadLink>anniekostolany_rates2017.pdf</RatesDownloadLink></p>
		
		<p>If you have any more questions, feel free to email me at mail@anniekostolany.com or by filling out the contact form.</p>

		<BookNowButton />
	</Page>
);
