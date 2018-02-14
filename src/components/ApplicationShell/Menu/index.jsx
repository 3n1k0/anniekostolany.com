import React from 'react';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';

export default () => (
	<div>
		<MenuBlock title="info">
			<MenuItem to="/about-me">about me</MenuItem>
			<MenuItem to="/investment">investment</MenuItem>
		</MenuBlock>
		<MenuBlock title="my work">
			<MenuItem to="/streetstyle">portraits</MenuItem>
			<MenuItem to="/fashion-confession">fashion</MenuItem>
			<MenuItem to="/boudoir-session">boudoir</MenuItem>
			</MenuItem>
		</MenuBlock>
			<MenuBlock title="weddings 👰🏻">
			<MenuItem to="/forest-fairy-tale">forest fairy tale</MenuItem>
			<MenuItem to="/bridal-beauty">styled bridal</MenuItem>
			<MenuItem to="/lost-bride">the lost bride</MenuItem>
		</MenuBlock>
		<MenuItem to="/blog">blog</MenuItem>
		<MenuItem to="/contact">contact</MenuItem>
	</div>
);
