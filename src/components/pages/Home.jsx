import React from 'react';
import AlbumPage from '../AlbumPage';
import Photo from '../Photo';
import PhotoSet from '../PhotoSet';
import CallToActionButton from '../CallToActionButton';
import PrettyLink from '../PrettyLink';

export default () => (
	<AlbumPage
		title="Portrait &amp; wedding Photography in Amsterdam"
		image="home/zsofi.jpg"
		permalink="/"
	>
		<PhotoSet>
			<PrettyLink
				to="/blog/2018/03/15/creative-freedom"
				title="Studio photography"
				color="black"
				background="white"
				image="home/amanda2.jpg"
			>
				<Photo file="home/amanda2.jpg" />
			</PrettyLink>
			<Photo file="home/kady2.jpg" />
		</PhotoSet>

		
		
		<PrettyLink
			to="/portraits"
			title="Never give up dreaming"
			color="white"
			background="black"
			image="home/zsofi.jpg"
		>
			<Photo file="home/zsofi.jpg" />
		</PrettyLink>
		
		
		
		
		<PrettyLink
			to="/blog/2018/02/10/dutch-model-fall-photoshoot"
			title="Simplicity is key"
			color="white"
			background="black"
			image="home/11.jpg"
		>
			<Photo file="home/11.jpg" />
		</PrettyLink>
		
		
	
		
		<PrettyLink
			to="/forest-fairy-tale"
			title="Styled bridals"
			color="white"
			background="black"
			image="home/jillmermaid.jpg"
		>
			<Photo file="home/jillmermaid.jpg" />
		</PrettyLink>
		
		
		
		
		<PhotoSet>
			<PrettyLink
				to="/blog/2018/03/15/creative-freedom"
				title="Studio photography"
				color="black"
				background="white"
				image="home/amanda3.jpg"
			>
				<Photo file="home/amanda3.jpg" />
			</PrettyLink>
			<Photo file="home/kady6.jpg" />
		</PhotoSet>
		

		
		<PrettyLink
			to="/blog/2018/02/10/dutch-model-fall-photoshoot"
			title="Simplicity is key"
			color="white"
			background="black"
			image="home/9.jpg"
		>
			<Photo file="home/9.jpg" />
		</PrettyLink>
		
		
		<PrettyLink
			to="/bridal-beauty"
			title="Styled bridals"
			color="white"
			background="black"
			image="home/menyasszonyok.jpg"
		>
			<Photo file="home/menyasszonyok.jpg" />
		</PrettyLink>
		
		

		<CallToActionButton to="/contact" text="Book now" />
	</AlbumPage>
);
