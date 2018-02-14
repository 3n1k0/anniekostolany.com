import styled from 'styled-components';

export default styled.div`
	img {
		float: left;
		width: 50%;
	}

	&:after {
		clear: both;
		display: block;
		content: ' ';
	}
`;
