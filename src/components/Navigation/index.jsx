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
						<li>Info
							<ul>
								<li><Link to="/my-story">My story</Link></li>
								<li><Link to="/rates">Rates</Link></li>
							</ul>
						</li>
						<li><Link to="/couple-shoots">Couple shoots</Link></li>
						<li>Portraiture
							<ul>
								<li><Link to="/tropical-vibes">Tropical vibes / Zsofia Cank</Link></li>
								<li><Link to="/confidence-is-key">Confidence is key / Matias Melina</Link></li>
								<li><Link to="/fashion-confession">Fashion Confession / Anna Margout</Link></li>
								<li><Link to="/rebellion">Rebellion / Nivine Massaud</Link></li>
								<li><Link to="/lost-bride">The Lost Bride / Jill Valerie</Link></li>
								<li><Link to="/dreamy-beach">Dreamy beach photoshoot / Stéphanie Lopez</Link></li>
							</ul>
						</li>
						<li>Families
							<ul>
								<li><Link to="/events-and-lifestyle">Events & Lifestyle</Link></li>
								<li><Link to="/children">Children</Link></li>
							</ul>
						</li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Facebook/><Instagram/></li>
					</ul>
				</div>
			</div>
		);
	}
};
