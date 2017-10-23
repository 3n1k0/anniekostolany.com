import React from 'react';
import { blur, pages } from './style.scss';
import DesktopSidebar from './DesktopSidebar';
import Menu from './Menu';
import { SmallScreen, LargeScreen } from '../ResponsiveComponents';
import MobileSidebar from './MobileSidebar';
import Header from './Header';
import MenuButton from './MenuButton';
import { withRouter } from 'react-router-dom';
import SocialIcons from './SocialIcons';

class ApplicationShell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen : false
		};

		this.onHistory = this.onHistory.bind(this);
		this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.props.history.listen(this.onHistory);
	}

	handleMenuButtonClick() {
		this.setState(prevState => ({
			isMenuOpen : !prevState.isMenuOpen
		}));
	}

	onHistory() {
		this.closeMenu();
	}

	closeMenu() {
		this.setState(prevState => ({
			isMenuOpen : false
		}));
	}

	render() {
		return (
			<div>
				<SmallScreen>
					<div className={pages + ' ' + (this.state.isMenuOpen ? blur : '')}
						onClick={this.closeMenu}
					>
						{this.props.children}
					</div>
					<Header>
						<MenuButton onClick={this.handleMenuButtonClick} />
					</Header>
					<MobileSidebar isOpen={this.state.isMenuOpen}>
						<Menu />
						<SocialIcons />
					</MobileSidebar>
				</SmallScreen>
				<LargeScreen>
					<div className={pages}>{this.props.children}</div>
					<DesktopSidebar>
						<h1>Annie Kostolany</h1>
						<Menu />
						<SocialIcons />
					</DesktopSidebar>
				</LargeScreen>
			</div>
		);
	}
};

export default withRouter(ApplicationShell);
