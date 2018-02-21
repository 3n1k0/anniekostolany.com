import styled from 'styled-components';

const IMAGE_PATH = 'https://anniekostolany.com/images/';

export default styled.img.attrs({
	src: props => IMAGE_PATH + props.file
})`
	display: block;
	width: 100%;

	@media (max-width: 500px) {
		padding-bottom: 0;
	}
`;
