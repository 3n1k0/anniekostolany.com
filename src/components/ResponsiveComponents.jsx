import React from 'react';
import MediaQuery from 'react-responsive';

export const SmallScreen = (props) => (
	<MediaQuery query="(max-width: 1024px)">
		{props.children}
	</MediaQuery>
);

export const LargeScreen = (props) => (
	<MediaQuery query="(min-width: 1025px)">
		{props.children}
	</MediaQuery>
);
