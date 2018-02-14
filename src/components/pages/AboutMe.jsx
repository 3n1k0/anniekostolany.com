import React from 'react';
import { Photo, Page } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page title="About me">
		<Photo
			file="aboutme/anniekostolany.jpg"
			alt="Annie Kostolany Photographer"
		/>

		<p>Hey there!</p>

		<p>
			Welcome to my website! My name is Annie, I am a Hungarian girl
			living in the Netherlands. I am a self-taught portrait photographer.
			<br /> My inspiration comes from my life and from all the beauty that
			surrounds me. Most of the time I just quietly observe. I wait until light, texture, color and
			shape create my feelings. <br /> Then I
			take them and transform them into photographs. <br /> Travelling is an essential part of my life.
			When I travel I feel like the world has no limits, and everything is possible.
I have a strong opinion on feminism, human and animal rights. I like to ask questions, find answers, get to know people and understand them better.
		</p>

		<p>
			Is it me you're looking for? Let's meet for a coffee and
			find it out! For all enquires don't hesitate to email me at
			mail@anniekostolany.com or by clicking this button below.
		</p>

		<BookNowButton />
	</Page>
);
