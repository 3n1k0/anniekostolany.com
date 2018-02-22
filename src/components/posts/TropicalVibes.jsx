import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Tropical vibes"
		description="Palm trees and pretty girls are always a good match."
		date="2018-02-10"
		permalink="palm-trees-pretty-girls"
		image="tropical_vibes/1.jpg"
	>
		<p>
		This is an older project of mine but I'd like to share cause I still really like it. Sofia is a real beauty with interesting southern characteristics. 
		This was actually the first time we worked together. I like her bubbly, flexible, cheerful personality a lot. 
		She's also super smart, speaks a bunch of languages and still studying. Follow her on instagram @sofiacnk.
		
		</p>

		<Photo file="tropical_vibes/1.jpg" />
		<Photo file="tropical_vibes/2.jpg" />
		<Photo file="tropical_vibes/3.jpg" />
		<Photo file="tropical_vibes/4.jpg" />
		<Photo file="tropical_vibes/5.jpg" />
		<Photo file="tropical_vibes/6.jpg" />
		<Photo file="tropical_vibes/7.jpg" />
		<Photo file="tropical_vibes/8.jpg" />
	</BlogPost>
);
