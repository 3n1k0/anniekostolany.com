import React from 'react';
import { open, closed } from './style.scss';

export default class HideableSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isOpen: false
		};
	}

	handleClick() {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	}

	render() {
		return (
			<div className={this.props.isOpen ? open : closed}>
				{this.props.children}
			</div>
		);
	}
}
