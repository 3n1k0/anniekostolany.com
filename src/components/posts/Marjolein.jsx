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
			
			Marjolein is a Dutch model. She's working with like a hundred agencies which is understandable as she's super pretty.
		</p>

		<Photo file="autumn_scent/1.jpg" />
		<Photo file="autumn_scent/2.jpg" />
		<p>Amsterdam photo sessions are my favourite since I'm in love with the street layouts and all the pretty locations.</p>
		<Photo file="autumn_scent/3.jpg" />
		<p>Nature always inspired me a lot.</p>
		<Photo file="autumn_scent/4.jpg" />
		<p>Looking through my porfolio there's definitely a pattern of flowers, leaves and all kinds of nature stuff.</p>
		<Photo file="autumn_scent/5.jpg" />
		<p>This photos were taken in Park Frankendael in Amsterdam.</p>
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
