import React from 'react';
import { Link } from 'react-router-dom';
import classNames from './style.scss';
import { Facebook, Instagram } from '../SocialIcons';
import Blur from '../Blur';

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
			<div>
				<Blur isBlur={this.state.isMenuOpen && this.state.isMobile} />
				<div className={navigationClassName}>
					<h1>Annie Kostolany</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/couples">People in love</Link></li>
						<li><Link to="/portraits">Portraits</Link></li>
						<li><Link to="/children">Children</Link></li>
						<li><Link to="/personal">Personal</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Facebook/><Instagram/></li>
					</ul>
				</div>
				<a className={classNames.hamburgerButton} onClick={this.handleClick}>Button</a>
			</div>
		);
	}
};
