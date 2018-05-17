import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage title="About me">
		<Photo
			file="aboutme/anniekostolany.jpg"
			alt="Annie Kostolany fashion photographer"
		/>

		<p>Hi!</p>

		<p>
			My name is Annie, I an Amsterdam-based fashion photographer. 
		Originally I am from Eastern-Europe, which influences my work just as much as nature, feminine beauty and natural light.
		</p>
		
		<p>mail@anniekostolany.com</>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
