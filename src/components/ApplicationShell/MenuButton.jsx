import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	height: 40px;
	padding: 0 0 0 10px;
	text-align: center;
	width: 40px;

	i {
		font-size: 30px;
		line-height: 40px;
	}
`;

export default props => (
	<Button onClick={props.onClick}>
		<i className="fa fa-bars" />
	</Button>
);
