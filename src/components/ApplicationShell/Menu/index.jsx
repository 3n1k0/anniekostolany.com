import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="info">
			<MenuItem to="/about-me">about me</MenuItem>
			{/*<MenuItem to="/blog">Blog</MenuItem>*/}
			<MenuItem to="/investment">investment</MenuItem>
		</MenuBlock>
		<MenuBlock title="styled bridal 👰🏻">
			<MenuItem to="/forest-fairy-tale">forest fairy tale</MenuItem>
			<MenuItem to="/bridal-beauty">bridal beauty</MenuItem>
			<MenuItem to="/lost-bride">the lost bride</MenuItem>
		</MenuBlock>
		<MenuBlock title="portraiture">
			<MenuItem to="/boudoir-session">boudoir</MenuItem>
			<MenuItem to="/autumns-scent">autumn's scent 🍂</MenuItem>
			<MenuItem to="/streetstyle">#streetstyle</MenuItem>
			<MenuItem to="/fashion-confession">fashion confession</MenuItem>
			<MenuItem to="/confidence-is-key">confidence is key</MenuItem>
			<MenuItem to="/rockn-roll-girl">rebellion</MenuItem>
			<MenuItem to="/tropical-vibes">tropical vibes 🌴</MenuItem>
			<MenuItem to="/dreamy-beach-photoshoot">
				dreamy beach photoshoot
			</MenuItem>
		</MenuBlock>
		<MenuBlock title="couple shoots">
			{/*<MenuItem to="/couple-miami">Miami</MenuItem>*/}
			<MenuItem to="/couple-germany">germany</MenuItem>
			<MenuItem to="/couple-hungary">hungary</MenuItem>
		</MenuBlock>
		<MenuItem to="/photo-walk-amsterdam-haarlem">
			photo walk amsterdam 🚲
		</MenuItem>
		<MenuItem to="/contact">contact</MenuItem>
	</div>
);
