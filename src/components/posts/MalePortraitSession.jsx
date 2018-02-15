import BlogPost from '../BlogPost';
import Photo from '../Photo';
import React from 'react';

export default () => (
	<BlogPost
		title="Male fashion portrait session in Amsterdam"
		description="Refreshing portrait session with the super stylish Matias."
		date="2018-02-10"
		permalink="dutch-model-fall-photoshoot"
	>
		<p>
			I tell you a secret about this session: we actually shot these photos around (and in) an office. I think location is not that important when it comes to fashion photos.
      It's really easy to work with walls and other elements that are already there. I love to be creative and compose photos around the subject. 
      What makes it even more special to me is the model, who happens to be a guy. Most of the time my models are women and children but I loved this session and I hope to do similar ones in the future.
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
