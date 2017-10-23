import React from 'react';
import MediaQuery from 'react-responsive';

export const SmallScreen = (props) => (
	<MediaQuery query="(max-width: 768px)">
		{props.children}
	</MediaQuery>
);

export const LargeScreen = (props) => (
	<MediaQuery query="(min-width: 769px)">
		{props.children}
	</MediaQuery>
);
