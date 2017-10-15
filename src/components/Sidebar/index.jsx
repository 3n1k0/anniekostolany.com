import React from 'react';
import classNames from './style.scss';
import { Facebook, Instagram } from './SocialIcons';
import MenuBlock from './MenuBlock';
import MenuItem from './MenuItem';
import SidebarScroller from './SidebarScroller';

const MOBILE_BREAKPOINT = 500;

export default class Navigation extends React.Component {
	constructor() {
		super();
		this.state = {isMenuOpen: false, isMobile : this.isMobile()};
		this.handleClick = this.handleClick.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	handleClick() {
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}));
	}

	isMobile() {
		return window.innerWidth < MOBILE_BREAKPOINT;
	}

	updateDimensions() {
		this.setState(() => ({
			isMobile : this.isMobile()
		}));
	}

	render() {
		let navigationClassName = [
			classNames.navigation,
			(this.state.isMenuOpen || !this.state.isMobile) ? classNames.opened : classNames.closed
		].join(' ');

		return (
			<div className={navigationClassName}>
				<SidebarScroller>
					<h1>Annie Kostolany</h1>
					<MenuBlock title="Info">
						<MenuItem to="/about-me">About me</MenuItem>
						<MenuItem to="/blog">Blog</MenuItem>
						<MenuItem to="/pricing">Pricing</MenuItem>
					</MenuBlock>
					<MenuBlock title="Couple shoots">
						<MenuItem to="/couple-miami">Miami</MenuItem>
						<MenuItem to="/couple-hungary">Hungary</MenuItem>
						<MenuItem to="/couple-germany">Germany</MenuItem>
					</MenuBlock>
					<MenuBlock title="Portraiture">
						<MenuItem to="/tropical-vibes">Tropical vibes</MenuItem>
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
					<Facebook/><Instagram/>
				</SidebarScroller>
			</div>
		);
	}
};
