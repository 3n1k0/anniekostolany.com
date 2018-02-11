import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.li`
	line-height: 1em;
	list-style-type: none;
	margin: 0;
	padding: 0;

	a {
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		color: #000000;
		display: block;
		padding: 5px 0;
		text-decoration: none;
	}

	a:hover,
	a:active,
	a.active {
		text-decoration: underline;
	}
`;

class MenuItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};

		this.onHistory = this.onHistory.bind(this);
		this.props.history.listen(this.onHistory);
	}

	componentDidMount() {
		this.onHistory(this.props.location);
	}

	onHistory(location) {
		if (location.pathname === this.props.to) {
			this.setState(() => {
				return { active: true };
			});
		}

		if (this.state.active && location.pathname !== this.props.to) {
			this.setState(() => {
				return { active: false };
			});
		}
	}

	render() {
		return (
			<Button>
				<Link
					className={this.state.active ? 'active' : ''}
					to={this.props.to}
				>
					{this.props.children}
				</Link>
			</Button>
		);
	}
}

export default withRouter(MenuItem);
