import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { menuItem, active } from './menuItem.scss';

class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active : false
		};

		this.onHistory = this.onHistory.bind(this);
		this.props.history.listen(this.onHistory);
	}

	componentDidMount() {
		this.onHistory(this.props.location);
	}

	onHistory(location) {
		if (location.pathname === this.props.to) {
			this.setState(prevState => {
				return {active : true};
			});
		}

		if (
			this.state.active &&
			location.pathname !== this.props.to
		) {
			this.setState(prevState => {
				return {active : false};
			});
		}
	}

	render() {
		return (
			<li className={menuItem}>
				<Link className={this.state.active ? active : ''} to={this.props.to}>{this.props.children}</Link>
			</li>
		)
	}
};

export default withRouter(MenuItem);
