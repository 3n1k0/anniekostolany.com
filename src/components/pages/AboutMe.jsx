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
			My name is Annie, I am an Amsterdam-based fashion photographer. 
		Nature and feminine beauty inspire a big part of my work but I am always happy to challenge myself with new styles and ideas. I confidently work both with natural light and in studio environment.
			
		</p>
		
		<p>Inquiries: mail@anniekostolany.com</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
