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

export default [
	{ path : '/', title : 'Home', component : HomePage, exact : true },
	{ path : '/contact', title : 'Contact', component : ContactPage },
	{ path : '/thanks', title : 'Contact', component : ThanksPage },
	{ path : '/about-me', title : 'About me', component : AboutMePage },
	{ path : '/pricing', title : 'Investment', component : PricingPage },

	{ path : '/styled-bridal', component : StyledBridalPage },

	/* Portraiture */
	{ path : '/autumns-scent', component : AutumnsScent },
	{ path : '/streetstyle', component : StreetStyleAlbumPage },
	{ path : '/dreamy-beach', component : DreamyBeachAlbumPage },
	{ path : '/lost-bride', component : LostBrideAlbumPage },
	{ path : '/rebellion', component : RebellionAlbumPage },
	{ path : '/fashion-confession', component : FashionConfessionAlbumPage },
	{ path : '/confidence-is-key', component : ConfidenceIsKeyAlbumPage },
	{ path : '/tropical-vibes', component : TropicalVibesAlbumPage },

	/* Couple shoots */
	{ path : '/couple-germany', component : CoupleGermanyAlbumPage },
	{ path : '/couple-hungary', component : CoupleHungaryAlbumPage },
	{ path : '/couple-miami', component : CoupleMiamiAlbumPage },

	{ path : '/photo-walk-amsterdam', component : PhotoWalkAmsterdamAlbumPage },

	/* Family */
	{ path : '/children', component : ChildrenAlbumPage },
	{ path : '/lifestyle', component : LifestylePage },
	{ path : '/events', component : EventsPage }
];
