import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ReadMore = styled.div``;

export default props => (
	<ReadMore>
		<Link to="/">{props.text}</Link>
	</ReadMore>
);
