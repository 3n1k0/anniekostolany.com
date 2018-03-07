import React from 'react';
import Hammer from 'hammerjs';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	display: block;
	overflow: hidden;
	position: relative;
`;

const CarouselScroller = styled.div`
	position: absolute;

	&:after {
		clear: both;
		content: " ";
		display: block;
	}
`;

export default class Carousel extends React.Component {
	constructor() {
		super(props);
		this.state = {
			offset : 0,
			startingOffset : 0,
			scrolling : false
		};
	}

	componentDidMount() {
		this.mc = new Hammer(this.containerEl);
		this.mc.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL });
		this.mc.on('panstart', this.onPanStart);
		this.mc.on('panmove', this.onPanMove);
		this.mc.on('panend', this.onPanEnd);
	}

	onPanStart = event => {

	}

	onPanMove = event => {

	}

	onPanEnd = event => {

	}

	render() {
		const { className, children } = this.props;
		const scrollerStyle = {
			transform : 'translate3d(0, ' + (this.state.offset) + 'px, 0)',
			transition : this.state.scrolling ? 'unset' : 'transform 0.5s'
		};

		return (
			<CarouselContainer ref={el => { this._containerEl = el; }}>
				<CarouselScroller
					ref={el => { this._scrollerEl = el; }}
					style={scrollerStyle}
				>
					{this.props.children}
				</CarouselScroller>
			</CarouselContainer>
		);
	}
}
