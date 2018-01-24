import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="info">
			<MenuItem to="/about-me">about me</MenuItem>
			{/*<MenuItem to="/blog">Blog</MenuItem>*/}
			<MenuItem to="/pricing">investment</MenuItem>
		</MenuBlock>
		<MenuItem to="/blog">blog</MenuItem>
		<MenuItem to="/styled-bridal">styled bridal 👰🏻</MenuItem>
		<MenuBlock title="portraiture">
			<MenuItem to="/autumns-scent">autumn's scent 🍂</MenuItem>
			<MenuItem to="/streetstyle">#streetstyle</MenuItem>
			<MenuItem to="/fashion-confession">fashion confession</MenuItem>
			<MenuItem to="/confidence-is-key">confidence is key</MenuItem>
			<MenuItem to="/rebellion">rebellion</MenuItem>
			<MenuItem to="/tropical-vibes">tropical vibes 🌴</MenuItem>
			<MenuItem to="/dreamy-beach">dreamy beach photoshoot</MenuItem>
			<MenuItem to="/lost-bride">the lost bride</MenuItem>
		</MenuBlock>
		<MenuBlock title="couple shoots">
			{/*<MenuItem to="/couple-miami">Miami</MenuItem>*/}
			<MenuItem to="/couple-germany">germany</MenuItem>
			<MenuItem to="/couple-hungary">hungary</MenuItem>
		</MenuBlock>
		<MenuItem to="/photo-walk-amsterdam">photo walk amsterdam 🚲</MenuItem>
		<MenuItem to="/contact">contact</MenuItem>
	</div>
);
