import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';
import Helmet from 'react-helmet';

export default () => (
	<Page>
		<Helmet>
			<meta
				name="description"
				content="Stylish & edgy street fashion photoshoot with the amazing Zsofia Cank."
			/>
			<title>#streetstyle | Annie Kostolany</title>

			<meta property="og:title" content="#streestyle | Annie Kostolany" />
			<meta
				property="og:description"
				content="Stlyish & edgy street fashion photoshoot with the amazing Zsofia Cank."
			/>
			<meta
				property="og:image"
				content="https://anniekostolany.com/images/streetsyle/anker1.jpg"
			/>
		</Helmet>

		<h2>#streetstyle</h2>
		<p>
			Stlyish & edgy street fashion photoshoot with the amazing Zsofia
			Cank.
		</p>

		<Photo file="streetsyle/smink.jpg" />
		<Photo file="streetsyle/utszele.jpg" />
		<Photo file="streetsyle/parkolohaz.jpg" />
		<Photo file="streetsyle/parkolo.jpg" />
		<Photo file="streetsyle/oszlop.jpg" />
		<Photo file="streetsyle/guggolos.jpg" />
		<Photo file="streetsyle/piros.jpg" />
		<Photo file="streetsyle/mozaik.jpg" />
		<Photo file="streetsyle/mozaikkozel.jpg" />
		<Photo file="streetsyle/hajszal.jpg" />
		<Photo file="streetsyle/anker2.jpg" />
		<Photo file="streetsyle/anker1.jpg" />
		<Photo file="streetsyle/anker3.jpg" />
		<Photo file="streetsyle/anker4.jpg" />
		<Photo file="streetsyle/zold.jpg" />
		<Photo file="streetsyle/zold2.jpg" />
		<Photo file="streetsyle/flare1.jpg" />
		<Photo file="streetsyle/flare2.jpg" />
		<Photo file="streetsyle/flare3.jpg" />
		<Photo file="streetsyle/flare4.jpg" />
		<p>Zsofia Cank, Budapest, 2017.</p>
		<BookNowButton />
	</Page>
);
