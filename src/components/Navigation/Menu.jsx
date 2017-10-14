import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { menuBlock, opened, closed } from './menuBlock.scss';
import { menuItem } from './menuItem.scss';
import MenuItem from './MenuItem';

export class MenuBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			opened : false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(event) {
		event.preventDefault();
		this.setState(prevState => ({
			opened : !prevState.opened
		}));
	}

	render() {
		return (
			<div className={menuBlock + ' ' + (this.state.opened ? opened : closed)}>
				<a href="#" onClick={this.toggle}>{this.props.title}</a>
				<ul>
					{this.props.children}
				</ul>
			</div>
		);
	}
};

export const Menu = (props) => (
	<div>{props.children}</div>
);

export {MenuItem};
