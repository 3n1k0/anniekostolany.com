import { BlogPost, Photo } from '../BlogPost';
import React from 'react';

export default () => (
	<BlogPost
		title="Forests & freckles"
		description="Low-key portraiture always works with natural beauties like Marjolein."
		date="2018-02-10"
		permalink="dutch-model-fall-photoshoot"
	>
		<p>
			This girl literally looks like this with close to no effort. I love
			to work with natural beauties like her.
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
