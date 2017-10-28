import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="Info">
			<MenuItem to="/about-me">about me</MenuItem>
			{/*<MenuItem to="/blog">Blog</MenuItem>*/}
			<MenuItem to="/pricing">pricing</MenuItem>
		</MenuBlock>
		<MenuBlock title="couple shoots">
			{/*<MenuItem to="/couple-miami">Miami</MenuItem>*/}
			<MenuItem to="/couple-germany">germany</MenuItem>
			<MenuItem to="/couple-hungary">hungary</MenuItem>
		</MenuBlock>
		<MenuBlock title="portraiture">
			<MenuItem to="/streetstyle">#streetstyle</MenuItem>
			<MenuItem to="/fashion-confession">fashion confession</MenuItem>
			<MenuItem to="/confidence-is-key">confidence is key</MenuItem>
			<MenuItem to="/rebellion">rebellion</MenuItem>
			<MenuItem to="/tropical-vibes">tropical vibes 🌴</MenuItem>
			<MenuItem to="/dreamy-beach">dreamy beach photoshoot</MenuItem>
			<MenuItem to="/lost-bride">the lost bride</MenuItem>
		</MenuBlock>
		<MenuBlock title="families">
			<MenuItem to="/children">children</MenuItem>
			<MenuItem to="/lifestyle">lifestyle</MenuItem>
			<MenuItem to="/events">events</MenuItem>
		</MenuBlock>
		<MenuItem to="/contact">contact</MenuItem>
	</div>
);
