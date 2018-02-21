import styled from 'styled-components';

export default styled.div`
	> * {
		float: left;
		width: 50% !important;
	}

	&:after {
		clear: both;
		display: block;
		content: ' ';
	}
`;
