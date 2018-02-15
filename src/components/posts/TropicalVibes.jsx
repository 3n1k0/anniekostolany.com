import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Tropical vibes"
		description="Palm trees and pretty girls are always a good match."
		date="2018-02-10"
		permalink="palm-trees-pretty-girls"
	>
		<p>
			I took these photos in Budapest. I am originally from Hungary and I love to do creative work whenever I come around my home. 
      It was super hot (summers are way warmer than in the Netherlands) and Sofia had no makeup on, other than some lipstick. I think she has a nice, charasteristic face and she will pursue a successful modeling career.
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
