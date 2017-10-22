import React from 'react';
import { scroller, alignBottom, scroll, alignTop } from './style.scss';

export default class Scroller extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			'alignClass' : alignTop
		};
		this.offsetTop = 0;
		this.onScroll = this.onScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll, {passive : true});
		window.addEventListener('resize', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onScroll);
	}

	onScroll() {
		const direction = this.prevScroll >= window.scrollY ? 'up' : 'down';
		this.prevScroll = window.scrollY;

		if (
			this.isBottomReached() &&
			direction === 'down' &&
			!this.fitsInTheWindow()
		) {
			this.offsetTop = window.scrollY - (this.container.clientHeight - window.innerHeight);
			this.setState(prevState => ({
				alignClass : alignBottom,
				offsetTop  : 'auto'
			}));
		}
		else if (
			this.isTopReached() && direction === 'up'
		) {
			this.offsetTop = window.scrollY;
			this.setState(prevState => ({
				alignClass : alignTop,
				offsetTop  : 'auto'
			}));
		}
		else if (
			!this.fitsInTheWindow()
		) {
			this.setState(prevState => ({
				alignClass : scroll,
				offsetTop  : this.offsetTop
			}));
		}
	}

	isBottomReached() {
		return (window.scrollY + window.innerHeight) >
			(this.container.clientHeight + this.offsetTop);
	}

	isTopReached() {
		return window.scrollY <= this.offsetTop;
	}

	fitsInTheWindow() {
		return this.container.clientHeight <= window.innerHeight;
	}

	render() {
		return (
			<div
				className={scroller + ' ' + this.state.alignClass}
				ref={(container) => { this.container = container; }}
				style={{top: this.state.offsetTop}}
			>
				{this.props.children}
			</div>
		);
	}
}
