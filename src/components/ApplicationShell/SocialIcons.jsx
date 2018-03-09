import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
	font-size: 30px;
	line-height: 46px;
	color: #ffffff;
	display: inline-block;
	padding: 0 15px;
`;

const getFacebookUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'fb://page?id=1389097571179740'
		: 'https://facebook.com/anniekostolany';

const getInstagramUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'instagram://user?username=anniekostolany'
		: 'https://instagram.com/anniekostolany';

export const Instagram = ({ className }) =>
	global.window ? (
		<Button
			href={getInstagramUrl(window.navigator.userAgent)}
			target="_blank"
			className={className}
		>
			<i className="fa fa-instagram" />
		</Button>
	) : (
		<Button
			href="https://instagram.com/anniekostolany"
			target="_blank"
			className={className}
		>
			<i className="fa fa-instagram" />
		</Button>
	);

export const Facebook = ({ className }) =>
	global.window ? (
		<Button
			href={getFacebookUrl(window.navigator.userAgent)}
			target="_blank"
			className={className}
		>
			<i className="fa fa-facebook-official" />
		</Button>
	) : (
		<Button
			href="https://facebook.com/anniekostolany"
			target="_blank"
			className={className}
		>
			<i className="fa fa-facebook-official" />
		</Button>
	);
