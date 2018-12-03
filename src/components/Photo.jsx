import styled from 'styled-components';

export default styled.img.attrs({
	src: props => props.file
})`
	display: block;
	width: 100%;
	padding-bottom: 40px;

	@media (max-width: 500px) {
		padding-bottom: 0;
	}
`;
