import BlogPost, { ReadMore, PhotoSet } from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default props => (
	<BlogPost
		title="Forests & freckles"
		description="Low-key portraiture always works with natural beauties like Marjolein."
		date="2018-02-10"
		permalink="dutch-model-fall-photoshoot"
		image="autumn_scent/1.jpg"
	>
		<p>
			We took this photos at Park Frankendael in Amsterdam. Nature always
			inspired me, and we were lucky to catch some (rare!) sunlight too.
			When I shoot I always look for interesting textures and
			complementary colors because I believe they play a big part of
			reaching more interesting results.
		</p>

		<Photo file="autumn_scent/1.jpg" />
		<Photo file="autumn_scent/2.jpg" />
		<Photo file="autumn_scent/3.jpg" />
		<Photo file="autumn_scent/4.jpg" />
		<Photo file="autumn_scent/5.jpg" />
		<Photo file="autumn_scent/6.jpg" />
		<Photo file="autumn_scent/7.jpg" />
		<Photo file="autumn_scent/8.jpg" />
		<Photo file="autumn_scent/9.jpg" />
		<Photo file="autumn_scent/10.jpg" />
		<Photo file="autumn_scent/11.jpg" />
		<Photo file="autumn_scent/12.jpg" />
		<Photo file="autumn_scent/13.jpg" />
	</BlogPost>
);
