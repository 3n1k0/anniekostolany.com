import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Male fashion portrait session in Amsterdam"
		description="Refreshing portrait session with the super stylish Matias."
		date="2017-09-10"
		permalink="male-fashion-portrait-session"
		image="confidence_is_key/hmcs1.jpg"
	>
		<p>
			I tell you a secret about this session: we actually shot these
			photos around (and in) an office. Like, an everyday office. People tend to worry too much about location but I actually think it is not that
			important when it comes to portrait photogrpahy. I believe my best photos were taken at medoicre locations anyway. 
			It might sound weird but usually an interesting color or the texture of a wall is more than enough to trigger my creativity. 
			So if you struggle with this, I really recommend to walk around with your eyes open and learn to see. 
	</p>

		<Photo file="confidence_is_key/hmcs1.jpg" />
		<Photo file="confidence_is_key/hmcs2.jpg" />
		<Photo file="confidence_is_key/viragok.jpg" />
		<Photo file="confidence_is_key/racsok.jpg" />
		<Photo file="confidence_is_key/matiasorange.jpg" />
		<Photo file="confidence_is_key/tamaszkodos.jpg" />
		<Photo file="confidence_is_key/legjobb.jpg" />
	</BlogPost>
);
