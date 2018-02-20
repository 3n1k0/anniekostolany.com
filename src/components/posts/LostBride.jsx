import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Lost Bride of the North Sea"
		description="Golden hour portrait session in Zandvoort"
		date="2017-08-10"
		permalink="lost-bride-styled-shoot"
		image="lost_bride/backlit.jpg"
	>
		<p>
			Funny that this shoot wasn't even started as a styled bridal but
			then it turned out to be one. When I saw Jill in her long, lace
			dress with her flowers, and the sun started to go down, suddenly the
			whole picture came together. She became a bride. I loved the
			dramatic light, because sunsets fascinate me a lot. Golden hour
			happens one hour before sunset, it's the time of the day when the
			light is red and soft and just ideal to take portraits. If you aim
			to shoot during golden hour, I recommend checking the exact time
			here: http://www.golden-hour.com/
		</p>

		<Photo file="lost_bride/backlit.jpg" />
		<Photo file="lost_bride/csokornezo.jpg" />
		<Photo file="lost_bride/lookingback.jpg" />
		<Photo file="lost_bride/mermaid.jpg" />
		<Photo file="lost_bride/shadow.jpg" />
		<Photo file="lost_bride/sunset.jpg" />
		<Photo file="lost_bride/szep.jpg" />
	</BlogPost>
);
