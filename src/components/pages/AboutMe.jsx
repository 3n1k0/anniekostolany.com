import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page title="About me">
		<Photo
			file="aboutme/anniekostolany.jpg"
			alt="Annie Kostolany Photographer"
		/>

		<p>Hey there!</p>

		<p>
			Welcome to my website! My name is Annie, I am Hungarian couple & lifestyle photographer
			living in Amsterdam. 
			<br /> My inspiration comes from my travels and all the amazing people I have met during my journey. 
			I'm specialized in portrait photography. My style is clean, airy and bright with a romantic touch.
			If this is what you're looking for, I'm happy to send you my package & information guide. 
			
		</p>

		<BookNowButton />
	</Page>
);
