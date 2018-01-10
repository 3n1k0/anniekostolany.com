import React from 'react';
import { withRouter } from 'react-router-dom';
import { menuBlock, opened, closed } from './style.scss';

class MenuBlock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: false
		};

		this.toggle = this.toggle.bind(this);
		this.urls = [];

		React.Children.forEach(this.props.children, child => {
			if (child.props.to) {
				this.urls.push(child.props.to);
			}
		});

		this.onHistory = this.onHistory.bind(this);
		this.props.history.listen(this.onHistory);
	}

	componentDidMount() {
		this.onHistory(this.props.location);
	}

	onHistory(location) {
		if (this.urls.indexOf(location.pathname) !== -1) {
			this.setState({
				opened: true
			});
		}

		if (this.state.opened && this.urls.indexOf(location.pathname) === -1) {
			this.setState({
				opened: false
			});
		}
	}

	toggle(event) {
		event.preventDefault();
		this.setState(prevState => ({
			opened: !prevState.opened
		}));
	}

	render() {
		return (
			<div
				className={
					menuBlock + ' ' + (this.state.opened ? opened : closed)
				}
			>
				<a href="#" onClick={this.toggle}>
					{this.props.title}
				</a>
				<ul>{this.props.children}</ul>
			</div>
		);
	}
}

export default withRouter(MenuBlock);
