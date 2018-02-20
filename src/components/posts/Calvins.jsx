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
			The Tommy Hilfiger HQ in Amsterdam was the perfect venue for a quick
			portrait session after a long day at the office. Anna styled her own
			outfits and I think she did a great job. I'm always happy when there
			is at least a little bit of wind during my shoots because it changes
			the dynamics dramaticly.
		</p>

		<Photo file="fashion_confession/annasand.jpg" />
		<Photo file="fashion_confession/calvin1.jpg" />
		<Photo file="fashion_confession/calvin2.jpg" />
		<Photo file="fashion_confession/oszlopok.jpg" />
		<Photo file="fashion_confession/calvin3.jpg" />
		<Photo file="fashion_confession/lepcso.jpg" />
		<Photo file="fashion_confession/calvin4.jpg" />
		<Photo file="fashion_confession/mezitlab.jpg" />
	</BlogPost>
);
