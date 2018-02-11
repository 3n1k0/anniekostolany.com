import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	font-size: 30px;
	line-height: 40px;
	padding-top: 10px;

	a {
		color: #000000;
		display: inline-block;
		padding-right: 10px;
	}
`;

const getFacebookUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'fb://page?id=1389097571179740'
		: 'https://facebook.com/anniekostolany';

const getInstagramUrl = ua =>
	/iPhone|iPad|iPod/.test(ua)
		? 'instagram://user?username=anniekostolany'
		: 'https://instagram.com/anniekostolany';

export default () =>
	global.window ? (
		<Button>
			<a
				href={getInstagramUrl(window.navigator.userAgent)}
				target="_blank"
			>
				<i className="fa fa-instagram" />
			</a>
			<a
				href={getFacebookUrl(window.navigator.userAgent)}
				target="_blank"
			>
				<i className="fa fa-facebook-official" />
			</a>
		</Button>
	) : (
		<Button>
			<a href="https://instagram.com/anniekostolany" target="_blank">
				<i className="fa fa-instagram" />
			</a>
			<a href="https://facebook.com/anniekostolany" target="_blank">
				<i className="fa fa-facebook-official" />
			</a>
		</Button>
	);
