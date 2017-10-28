import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="Info">
			<MenuItem to="/about-me">About me</MenuItem>
			{/*<MenuItem to="/blog">Blog</MenuItem>*/}
			<MenuItem to="/pricing">Pricing</MenuItem>
		</MenuBlock>
		<MenuBlock title="Couple shoots">
			{/*<MenuItem to="/couple-miami">Miami</MenuItem>*/}
			{/*<MenuItem to="/couple-hungary">Hungary</MenuItem>*/}
			<MenuItem to="/couple-germany">Germany</MenuItem>
		</MenuBlock>
		<MenuBlock title="Portraiture">
			<MenuItem to="/streetstyle">#streetstyle</MenuItem>
			<MenuItem to="/tropical-vibes">Tropical vibes 🌴</MenuItem>
			<MenuItem to="/confidence-is-key">Confidence is key</MenuItem>
			<MenuItem to="/fashion-confession">Fashion Confession</MenuItem>
			<MenuItem to="/rebellion">Rebellion</MenuItem>
			<MenuItem to="/lost-bride">The Lost Bride</MenuItem>
			<MenuItem to="/dreamy-beach">Dreamy beach photoshoot</MenuItem>
		</MenuBlock>
		<MenuBlock title="Families">
			<MenuItem to="/children">Children</MenuItem>
			<MenuItem to="/lifestyle">Lifestyle</MenuItem>
			<MenuItem to="/events">Events</MenuItem>
		</MenuBlock>
		<MenuItem to="/contact">Contact</MenuItem>
	</div>
);
