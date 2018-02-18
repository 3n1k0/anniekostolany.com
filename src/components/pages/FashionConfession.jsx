import React from 'react';
import Page from '../Page';
import Photo from '../Photo';
import BookNowButton from '../BookNowButton';
import { Link } from 'react-router-dom';

export default () => (
	<Page
		title="fashion"
		description="fashion by Annie"
		image="fashion_confession/333.jpg"
	>
		<h2>fashion</h2>
		<Photo file="fashion_confession/tresor.jpg" />
		<Photo file="fashion_confession/anker4.jpg" />
		<Link to="/blog/2017/10/09/calvin-portrait-session"><Photo file="fashion_confession/annasand.jpg" /></Link>
		<Photo file="fashion_confession/cigi.jpg" />
		<Photo file="fashion_confession/333.jpg" />
		<Photo file="fashion_confession/korlat.jpg" />
		<Photo file="fashion_confession/lines.jpg" />
		<Photo file="fashion_confession/oszlop.jpg" />
		<Photo file="fashion_confession/legjobb.jpg" />
		<Link to="/blog/2017/10/09/calvin-portrait-session"><Photo file="fashion_confession/mezitlab.jpg" /></Link>
		<Link to="/blog/2018/02/10/dutch-model-fall-photoshoot"><Photo file="fashion_confession/13.jpg" /></Link>
		<Link to="/blog/2017/10/09/calvin-portrait-session"><Photo file="fashion_confession/lepcso.jpg" /></Link>
		<Link to="/blog/2018/02/10/dutch-model-fall-photoshoot"><Photo file="streetsyle/9.jpg" /></Link>
		<BookNowButton />
	</Page>
);
