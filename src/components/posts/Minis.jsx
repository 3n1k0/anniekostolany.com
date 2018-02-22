import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Amsterdam mini sessions"
		description="30-minute photo sessions in Amsterdam "
		date="2017-02-22"
		permalink="amsterdam-mini-session"
		image="mini/2.jpg"
	>
		<p>
			I love mini sessions so much. Langa Mngoma is a South African doctor AND influencer (so basically a superwomen). 
      She contacted me when she visited Amsterdam in February. We were really lucky with the weather (even though it was SOO cold!), because normally it rains constantly around here.
      
     
		</p>
    <p>Amsterdam has the cutest locations, great architecture, a little bit of nature, charming little streets and the most important, infinite flowers.</p>
		<Photo file="mini/1.jpg" />
    <p>Mini sessions are 30 minutes long, and they are a great option for bloggers and influencers too.</p>
		<Photo file="mini/2.jpg" />
    <p>It's also a great possibiliy if you need a professional headshot, like a LinkedIn profile photo, or something to your blog's about me section.</p>
		<Photo file="mini/3.jpg" />
    <p>These sessions come with 10 carefully edited, high-resolution images picked by you.</p>
		<Photo file="mini/4.jpg" />
		<Photo file="mini/5.jpg" />
		<Photo file="mini/6.jpg" />
    <p> You can book your own mini session by sending me an email (mail@anniekostolany.com) or by clicking the button below.</p>
	</BlogPost>
);
