import React from 'react';
import { Route } from 'react-router-dom';

import ContactPage from './components/pages/Contact';
import ThanksPage from './components/pages/Thanks';
import HomePage from './components/pages/Home';
import AboutMePage from './components/pages/AboutMe';
import PricingPage from './components/pages/Pricing';

import StyledBridalPage from './components/pages/StyledBridal';

import DreamyBeachAlbumPage from './components/pages/DreamyBeach';
import LostBrideAlbumPage from './components/pages/LostBride';
import RebellionAlbumPage from './components/pages/Rebellion';
import FashionConfessionAlbumPage from './components/pages/FashionConfession';
import ConfidenceIsKeyAlbumPage from './components/pages/ConfidenceIsKey';
import TropicalVibesAlbumPage from './components/pages/TropicalVibes';
import StreetStyleAlbumPage from './components/pages/StreetStyle';
import AutumnsScent from './components/pages/AutumnsScent';

import CoupleGermanyAlbumPage from './components/pages/CoupleGermany';
import CoupleHungaryAlbumPage from './components/pages/CoupleHungary';
import CoupleMiamiAlbumPage from './components/pages/CoupleMiami';

import PhotoWalkAmsterdamAlbumPage from './components/pages/PhotoWalkAmsterdam';

import LifestylePage from './components/pages/Lifestyle';
import ChildrenAlbumPage from './components/pages/Children';
import EventsPage from './components/pages/Events';

import BlogPage from './components/pages/Blog';
import blogPosts from './posts';
import { BlogPost } from './components/posts/BlogPost';

export default [
	<Route exact path="/" component={HomePage} key="1" />,
	<Route exact path="/contact" component={ContactPage} key="2" />,
	<Route exact path="/thanks" component={ThanksPage} key="3" />,
	<Route exact path="/about-me" component={AboutMePage} key="4" />,
	<Route exact path="/pricing" component={PricingPage} key="5" />,

	/* Styled Bridal */
	<Route exact path="/styled-bridal" component={StyledBridalPage} key="6" />,

	/* Portraiture */
	<Route exact path="/autumns-scent" component={AutumnsScent} key="7" />,
	<Route exact path="/streetstyle" component={StreetStyleAlbumPage} key="8" />,
	<Route exact path="/dreamy-beach" component={DreamyBeachAlbumPage} key="9" />,
	<Route exact path="/lost-bride" component={LostBrideAlbumPage} key="10" />,
	<Route exact path="/rebellion" component={RebellionAlbumPage} key="11"/>,
	<Route
		exact
		path="/fashion-confession"
		component={FashionConfessionAlbumPage}
		key="12"
	/>,
	<Route
		exact
		path="/confidence-is-key"
		component={ConfidenceIsKeyAlbumPage}
		key="13"
	/>,
	<Route exact path="/tropical-vibes" component={TropicalVibesAlbumPage} key="14" />,

	/* Couple shoots */
	<Route exact path="/couple-germany" component={CoupleGermanyAlbumPage} key="15" />,
	<Route exact path="/couple-hungary" component={CoupleHungaryAlbumPage} key="16" />,
	<Route exact path="/couple-miami" component={CoupleMiamiAlbumPage} key="17" />,

	<Route
		exact
		path="/photo-walk-amsterdam"
		component={PhotoWalkAmsterdamAlbumPage}
		key="18"
	/>,

	/* Family */
	<Route exact path="/children" component={ChildrenAlbumPage} key="19" />,
	<Route exact path="/lifestyle" component={LifestylePage} key="20" />,
	<Route exact path="/events" component={EventsPage} key="21" />,

	<Route exact path="/blog" component={BlogPage} key="22" />,

	...blogPosts.map((post, i) => {
		const { date, title } = post.props;

		return (
			<Route
				exact
				path={'/blog/' + BlogPost.getPermalink(date, title)}
				component={() => post}
				key={i + 23}
			/>
		);
	})
];
