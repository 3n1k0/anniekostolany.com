import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Nothing comes between me and my Calvins"
		description="Portraits at the Tommy Hilfiger HQ in Amsterdam."
		date="2017-10-09"
		permalink="calvin-portrait-session"
		image="fashion_confession/annasand.jpg"
	>
		<p>
			The Tommy Hilfiger HQ in Amsterdam was the perfect venue for this portrait session. 
			I think it's very hard to tell that the location is actually an office where normal people do their normal jobs every day.  
			It's also extremely stylish and the architecture is expectional so I think it comes without saying I had several shoots there already.
			Anna styled her own outfits and I think she did a great job. 
		</p>

		<Photo file="fashion_confession/annasand.jpg" />
		<Photo file="fashion_confession/calvin1.jpg" />
		<Photo file="fashion_confession/calvin2.jpg" />
		<p> The wind helped a lot to make my photos more dramatic. Thank you wind!</p>
		<Photo file="fashion_confession/oszlopok.jpg" />
		<Photo file="fashion_confession/calvin3.jpg" />
		<Photo file="fashion_confession/lepcso.jpg" />
		<Photo file="fashion_confession/calvin4.jpg" />
		<Photo file="fashion_confession/mezitlab.jpg" />
	</BlogPost>
);
