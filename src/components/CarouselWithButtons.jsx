import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const CarouselContainer = styled.div`
	display: block;
	position: relative;
`;

const LeftArrow = styled.div`
	position: absolute;
	display: block;
	width: 10px;
	height: 100px;
	background: #ff0000;
	left: 0;
	top: 100px;
`;

const RightArrow = LeftArrow.extend`
	left: auto;
	right: 0;
`;

export default class CarouselWithButtons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			position: 0
		};
	}

	onLeftArrowClick = () => {
		this.setState(prevState => {
			return {
				position: prevState.position - 1
			};
		});
	};

	onRightArrowClick = () => {
		this.setState(prevState => {
			return {
				position: prevState.position + 1
			};
		});
	};

	render() {
		const { className, children } = this.props;

		return (
			<CarouselContainer className={className}>
				<Carousel
					scrollToNextItem={this.onRightArrowClick}
					scrollToPreviousItem={this.onLeftArrowClick}
					position={this.state.position}
				>
					{children}
				</Carousel>
				<LeftArrow onClick={this.onLeftArrowClick} />
				<RightArrow onClick={this.onRightArrowClick} />
			</CarouselContainer>
		);
	}
}
