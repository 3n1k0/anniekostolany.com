import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
	font-size: 30px;
	line-height: 50px;
	//padding-top: 10px;
	color: #ffffff;
	display: inline-block;
	padding-right: 10px;
	float: right;
`;

const getFacebookUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'fb://page?id=1389097571179740'
		: 'https://facebook.com/anniekostolany';

const getInstagramUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'instagram://user?username=anniekostolany'
		: 'https://instagram.com/anniekostolany';

export const Instagram = () =>
	global.window ? (
		<Button
			href={getInstagramUrl(window.navigator.userAgent)}
			target="_blank"
		>
			<i className="fa fa-instagram" />
		</Button>
	) : (
		<Button href="https://instagram.com/anniekostolany" target="_blank">
			<i className="fa fa-instagram" />
		</Button>
	);

export const Facebook = () =>
	global.window ? (
		<Button
			href={getFacebookUrl(window.navigator.userAgent)}
			target="_blank"
		>
			<i className="fa fa-facebook-official" />
		</Button>
	) : (
		<Button href="https://facebook.com/anniekostolany" target="_blank">
			<i className="fa fa-facebook-official" />
		</Button>
	);
