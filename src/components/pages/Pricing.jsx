import React from 'react';
import { Photo, Page } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta name="description" content="Rates, packages & information." />
			<title>Investment| Annie Kostolany</title>

			<meta property="og:title" content="Investment | Annie Kostolany" />
			<meta
				property="og:description"
				content="Rates, packages & information."
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/investment/dorinaek.jpg"
			/>
		</Helmet>
		<h2>Investment</h2>
		<Photo file="investment/dorinaek.jpg" />
		<p>
			Since you are on this page, I think it's safe to assume that you
			like my style and you're considering to hire me. If you are
			interested in my rates, I can send you a detailed document of my
			full package prices to answer all the questions you might have right
			now.
		</p>{' '}
		<br /> All you need to do for this is just to send me an email to
		mail@anniekostolany.com or fill out the contact form below.
		<p>
			<br />Portrait sessions start at 190 eur
			<br />Mini sessions from 90 eur
			<br />Photo walk Haarlem & Amsterdam from 150 EUR
			<br />Wedding packages start from 900 eur
		</p>
		<BookNowButton />
	</Page>
);
