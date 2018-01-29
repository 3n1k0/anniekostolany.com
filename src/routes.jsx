import React from 'react';
import { Route } from 'react-router-dom';

import Contact from './components/pages/Contact';
import Thanks from './components/pages/Thanks';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Investments from './components/pages/Investments';

import StyledBridal from './components/pages/StyledBridal';
import ForestFairyTale from './components/pages/ForestFairyTale';
import BridalBeauty from './components/pages/BridalBeauty';
import LostBride from './components/pages/LostBride';

import Boudoir from './components/pages/Boudoir';
import DreamyBeach from './components/pages/DreamyBeach';
import Rebellion from './components/pages/Rebellion';
import FashionConfession from './components/pages/FashionConfession';
import ConfidenceIsKey from './components/pages/ConfidenceIsKey';
import TropicalVibes from './components/pages/TropicalVibes';
import StreetStyle from './components/pages/StreetStyle';
import AutumnsScent from './components/pages/AutumnsScent';

import CoupleGermany from './components/pages/CoupleGermany';
import CoupleHungary from './components/pages/CoupleHungary';
import CoupleMiami from './components/pages/CoupleMiami';

import PhotoWalkAmsterdam from './components/pages/PhotoWalkAmsterdam';

import Lifestyle from './components/pages/Lifestyle';
import Children from './components/pages/Children';
import Events from './components/pages/Events';

import Blog from './components/pages/Blog';
import blogPosts from './posts';
import { BlogPost } from './components/posts/BlogPost';

export default [
	<Route exact path="/" component={Home} key="1" />,
	<Route path="/contact" component={Contact} key="2" />,
	<Route path="/thanks" component={Thanks} key="3" />,
	<Route path="/about-me" component={AboutMe} key="4" />,
	<Route path="/investments" component={Investments} key="5" />,

	/* Styled Bridal */

	<Route path="/forest-fairy-tale" component={ForestFairyTale} key="6" />,
	<Route path="/bridal-beauty" component={BridalBeauty} key="7" />,
	<Route path="/lost-bride" component={LostBride} key="8" />,

	/* Portraiture */
	<Route path="/boudoir" component={Boudoir} key="9" />,
	<Route path="/autumns-scent" component={AutumnsScent} key="10" />,
	<Route path="/streetstyle" component={StreetStyle} key="11" />,
	<Route path="/dreamy-beach" component={DreamyBeach} key="12" />,
	<Route path="/rebellion" component={Rebellion} key="13" />,
	<Route path="/fashion-confession" component={FashionConfession} key="14" />,
	<Route path="/confidence-is-key" component={ConfidenceIsKey} key="15" />,
	<Route path="/tropical-vibes" component={TropicalVibes} key="16" />,

	/* Couple shoots */
	<Route path="/couple-germany" component={CoupleGermany} key="17" />,
	<Route path="/couple-hungary" component={CoupleHungary} key="18" />,
	<Route path="/couple-miami" component={CoupleMiami} key="19" />,

	<Route
		path="/photo-walk-amsterdam"
		component={PhotoWalkAmsterdam}
		key="20"
	/>,

	/* Family */
	<Route path="/children" component={Children} key="21" />,
	<Route path="/lifestyle" component={Lifestyle} key="22" />,
	<Route path="/events" component={Events} key="23" />,

	<Route exact path="/blog" component={Blog} key="24" />,

	...blogPosts.map((post, i) => {
		const { date, title } = post.props;

		return (
			<Route
				exact
				path={'/blog/' + BlogPost.getPermalink(date, title)}
				component={() => post}
				key={i + 25}
			/>
		);
	})
];
