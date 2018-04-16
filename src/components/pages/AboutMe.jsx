import React from 'react';
import TextPage from '../TextPage';
import Photo from '../Photo';
import CallToActionButton from '../CallToActionButton';

export default () => (
	<TextPage title="About me">
		<Photo
			file="aboutme/anniekostolany.jpg"
			alt="Annie Kostolany Photographer"
		/>

		<p>Hey there!</p>

		<p>
			My name is Annie, I am Hungarian couple & lifestyle photographer
			living in Amsterdam. 
			<br /> My inspiration comes from my travels and all the amazing people I have met during my journey. 
			I'm specialized in portrait photography.
			<br />My style is clean, airy and bright with a romantic touch.
			If this is what you're looking for, I'm happy to send you my package & information guide. 
			
		</p>

		<CallToActionButton to="/contact" text="Book now" />
	</TextPage>
);
