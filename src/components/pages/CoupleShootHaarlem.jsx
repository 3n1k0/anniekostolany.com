import React from 'react';
import { Page, Photo } from './Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page title="Romantic engagement shoot in Haarlem" permalink="/couple-haarlem">
		<h2>Romantic engagement shoot in Haarlem</h2>
		<p>
		These to are so beautiful together and they seem to be forgetting about the camera from time to time. That's why their smiles seems so authentic and candid.
		</p>

		<Photo file="haarlem_couple/haarlemcouple1.jpg" alt="Couple kissing on stairs" />
		<Photo file="haarlem_couple/haarlemcouple2.jpg" alt="Couple by windmill" />
		<Photo file="haarlem_couple/haarlemcouple3.jpg" alt="Couple by windmill" />
		<Photo file="haarlem_couple/haarlemcouple4.jpg" alt="Couple by brick wall" />
    <Photo file="haarlem_couple/haarlemcouple5.jpg" alt="Couple with heart shaped window" />
    <Photo file="haarlem_couple/haarlemcouple6.jpg" alt="Couple walking on street" />
    <Photo file="haarlem_couple/haarlemcouple7.jpg" alt="Couple hugging" />
    <Photo file="haarlem_couple/haarlemcouple8.jpg" alt="Couple by river" />

		<p>
			Couple shoots in Haarlem and in Amsterdam are really sweet and precious. The streets are so unique, and they give a magical atmosphere to all the photos. 
      Book your own photoshoot by sending me an email to mail@anniekostolany.com. I am also happy to
			help picking out the location and dresses so everything will match just perfectly.
		</p>
		<BookNowButton />
	</Page>
);
