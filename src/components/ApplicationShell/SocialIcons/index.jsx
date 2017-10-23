import React from 'react';
import {socialIcons} from './style.scss';

const getFacebookUrl = ua => (
	(/iPhone|iPad|iPod/).test(ua) ? 'fb://page?id=1389097571179740' : 'https://facebook.com/anniekostolany'
);

const getInstagramUrl = ua => (
	(/iPhone|iPad|iPod/).test(ua) ? 'instagram://user?username=anniekostolany' : 'https://instagram.com/anniekostolany'
);

export default () => (
	<div className={socialIcons}>
		<a href={getInstagramUrl(window.navigator.userAgent)} target="_blank"><i className="fa fa-instagram"></i></a>
		<a href={getFacebookUrl(window.navigator.userAgent)} target="_blank"><i className="fa fa-facebook-official"></i></a>
	</div>
);
