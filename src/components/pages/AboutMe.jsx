import React from 'react';
import { Photo, Page } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page>

		<Photo file="aboutme/anniekostolany.jpg" alt="Annie Kostolany Photographer"/>
		
		<p>Hey there!</p>
<br />Welcome to my website, my name is Annie and I am a Hungarian girl living in the Netherlands. I am a self-taught portrait photographer.	
<br />My inspiration comes from life and from all the beauty that surrounds us, even if we are not aware of it anymore.
Most of the time I just quietly observe. I wait until light, texture, color and shape add up to create a feeling or an impression.  
<br />Then I transform it into photographs.
<br />I love travelling with my camera. I took photos in Germany, Hungary, France, the Netherlands, and in the States. No matter where I am, I always absorb as much as I can, because foreign cultures and all corners of this world fascinate me more than anything.


<p>Is it me who you need as a photographer? Let's meet for a coffee and find it out! For all enquires don't hesitate to email me at mail@anniekostolany.com or by clicking this button below.</p>
		
		<BookNowButton />
	</Page>
);
