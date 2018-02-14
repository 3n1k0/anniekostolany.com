import React from 'react';
import { blur, pages } from './style.scss';
import DesktopSidebar from './DesktopSidebar';
import Menu from './Menu';
import { SmallScreen, LargeScreen } from '../ResponsiveComponents';
import MobileSidebar from './MobileSidebar';
import Header from './Header';
import MenuButton from './MenuButton';
import { Link, withRouter } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const Page = styled.div`
	padding: 40px 40px 0 40px;
`;

const Logo = styled.div`
	background-image: url(https://anniekostolany.com/images/logo.png);
	height: 0;
	width: 100%;
	background-size: 100% auto;
	background-repeat: no-repeat;
	padding-bottom: 56%;
`;

class ApplicationShell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuOpen: false
		};

		this.onHistory = this.onHistory.bind(this);
		this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.props.history.listen(this.onHistory);
	}

	handleMenuButtonClick() {
		this.setState(prevState => ({
			isMenuOpen: !prevState.isMenuOpen
		}));
	}

	onHistory() {
		this.closeMenu();
	}

	closeMenu() {
		this.setState(() => ({
			isMenuOpen: false
		}));
	}

	render() {
		return (
			<div>
				<Helmet>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
					/>
					<meta
						name="description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Haarlem, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta
						name="msvalidate.01"
						content="CC9A36425DA97869438FEFFB720A6432"
					/>

					<meta
						property="og:title"
						content="Portrait &amp; Event Photography in Haarlem | Annie Kostolany"
					/>
					<meta
						property="og:description"
						content="Family, portrait &amp; pre-wedding photography with a dreamy touch. Based in Haarlem, Netherlands, available worldwide. Let's create magic!"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en_US" />

					<link
						href="https://fonts.googleapis.com/css?family=Cardo|Roboto|Open+Sans"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
					/>

					<title>
						Portrait &amp; Event Photography in Haarlem | Annie
						Kostolany
					</title>
				</Helmet>
				<SmallScreen>
					<div
						className={
							pages + (this.state.isMenuOpen ? ' ' + blur : '')
						}
						onClick={this.closeMenu}
					>
						<Page>{this.props.children}</Page>
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
					<div className={pages}>
						<Page>{this.props.children}</Page>
					</div>
					<DesktopSidebar>
						<Link to="/">
							<Logo />
						</Link>
						<Menu />
						<SocialIcons />
					</DesktopSidebar>
				</LargeScreen>
			</div>
		);
	}
}

export default withRouter(ApplicationShell);
