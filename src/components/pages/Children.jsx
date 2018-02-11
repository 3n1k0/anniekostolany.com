import React from 'react';
import { Page, Photo } from '../Page';
import BookNowButton from '../BookNowButton';

export default () => (
	<Page title="Children photography">
		<h2> Children photography </h2>
		<p>
			{' '}
			Capturing the best moments of a kid's life in definitely not an easy
			task. It requires some patience and understanding. I believe that no
			matter how much energy a child has, it is always possible to achieve
			good results with them. I'll happily photograph birthdays, cake
			smashes, themed mini sessions (Christmas, costumes) and events. I
			have my own home-studio in Haarlem but I am flexible on the
			location. Contact me for more information on prices and
			availability.
		</p>
		<Photo
			file="children/kiskutyas.jpg"
			alt="Boy smiling with stuffed dog"
		/>
		<Photo
			file="children/35804680386_91d0cde856_k.jpg"
			alt="Little girl sitting in wash-basin"
		/>
		<Photo
			file="children/zoe.jpg"
			alt="Little girl splashing water in wash-basin"
		/>
		<Photo
			file="children/36800976664_cf99bb3aa6_k.jpg"
			alt="Dog and little boy playing on wheat-field"
		/>
		<Photo
			file="children/36800976784_beca9f8607_k.jpg"
			alt="Little boy eating grain on wheat-field "
		/>
		<Photo
			file="children/37511184711_6f927e6cad_k.jpg"
			alt="Little boy playing with dog and bicycle"
		/>
		<Photo
			file="children/35713356761_96a8c6af94_k.jpg"
			alt="Little girl sitting in front of bokeh background"
		/>
		<Photo
			file="children/35457314120_e536be26ac_k.jpg"
			alt="Little girl smiling in front of bokeh background"
		/>
		<Photo
			file="children/35035613503_7d219ee480_k.jpg"
			alt="Little girl laughing in pink and white room"
		/>
		<Photo file="children/z1.jpg" alt="Birthday girl touching pink cake" />
		<Photo file="children/z2.jpg" alt="Birthday girl smashing pink cake" />
		<Photo
			file="children/z3.jpg"
			alt="Birthday girl sitting in pink crown with cake"
		/>
		<Photo file="children/z4.jpg" alt="Birthday girl and crown on cake" />
		<Photo file="children/z5.jpg" alt="Birthday girl smashing cake" />
		<Photo file="children/z6.jpg" alt="Little girl eating birthday cake" />
		<Photo
			file="children/z7.jpg"
			alt="Little girl smashing birthday cake"
		/>
		<Photo file="children/gyerekek-10.jpg" alt="Little boy with flowers" />
		<Photo file="children/gyerekek-17.jpg" alt="Little girl smiling" />
		<Photo file="children/gyerekek-22.jpg" alt="Little girl portrait" />
		<BookNowButton />
	</Page>
);
