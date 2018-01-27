import React from 'react';
import { Route } from 'react-router-dom';

import Contact from './components/pages/Contact';
import Thanks from './components/pages/Thanks';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Pricing from './components/pages/Pricing';

import StyledBridal from './components/pages/StyledBridal';

import DreamyBeach from './components/pages/DreamyBeach';
import LostBride from './components/pages/LostBride';
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
	<Route path="/pricing" component={Pricing} key="5" />,

	/* Styled Bridal */
	<Route path="/styled-bridal" component={StyledBridal} key="6" />,

	/* Portraiture */
	<Route path="/autumns-scent" component={AutumnsScent} key="7" />,
	<Route path="/streetstyle" component={StreetStyle} key="8" />,
	<Route path="/dreamy-beach" component={DreamyBeach} key="9" />,
	<Route path="/lost-bride" component={LostBride} key="10" />,
	<Route path="/rebellion" component={Rebellion} key="11" />,
	<Route path="/fashion-confession" component={FashionConfession} key="12" />,
	<Route path="/confidence-is-key" component={ConfidenceIsKey} key="13" />,
	<Route path="/tropical-vibes" component={TropicalVibes} key="14" />,

	/* Couple shoots */
	<Route path="/couple-germany" component={CoupleGermany} key="15" />,
	<Route path="/couple-hungary" component={CoupleHungary} key="16" />,
	<Route path="/couple-miami" component={CoupleMiami} key="17" />,

	<Route
		path="/photo-walk-amsterdam"
		component={PhotoWalkAmsterdam}
		key="18"
	/>,

	/* Family */
	<Route path="/children" component={Children} key="19" />,
	<Route path="/lifestyle" component={Lifestyle} key="20" />,
	<Route path="/events" component={Events} key="21" />,

	<Route exact path="/blog" component={Blog} key="22" />,

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
