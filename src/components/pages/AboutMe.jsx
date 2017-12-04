import React from 'react';
import { Photo, Page } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>
		<h2>About me</h2>

		<Photo file="aboutme/anniekostolany.jpg" alt="Annie Kostolany Photographer"/>
		
		<p>Hey there!</p>
<p>Welcome to my website, my name is Annie and I am a Hungarian girl living in the Netherlands.</p> 
<br />I am a self-taught portrait photographer.	
<br />My inspiration comes from life and from all the beauty that surrounds us, even if we are not aware of it anymore.
Most of the time I just quietly observe. I wait until light, texture, color and shape adds up and creates a feeling. 
<br />Then I transform it into photographs.

<p>I love travelling with my camera. I took photos in Germany, Hungary, France, the Netherlands, and in the States. No matter where I am, I always absorb as much as I can, because foreign cultures and all corners of this world fascinate me more than anything.</p>


<p>Is it me who you need as a photographer? Let's meet for a coffee and find it out! For all enquires don't hesitate to email me at mail@anniekostolany.com or by filling out the contact form.</p>
		
		<BookNowButton />
	</Page>
);
