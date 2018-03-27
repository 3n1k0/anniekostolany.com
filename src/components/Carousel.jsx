import React from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	display: block;
	overflow-x: hidden;
	position: relative;
	padding-bottom: 65%;
`;

const CarouselScroller = styled.div`
	position: absolute;

	&:after {
		clear: both;
		content: ' ';
		display: block;
	}

	> * {
		float: left;
		width: ${props => 100 / props.itemCount}% !important;
		display: block;
	}

	width: ${props => props.itemCount * 100}%;
`;

export default class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: 0,
			scrolling: false
		};
	}

	componentDidMount() {
		if (!global.window) {
			return;
		}

		import('hammerjs').then(Hammer => {
			this.mc = new Hammer.default(this._containerEl);
			this.mc.get('pan').set({ direction: Hammer.default.DIRECTION_ALL });
			this.mc.on('panstart', this.onPanStart);
			this.mc.on('panmove', this.onPanMove);
			this.mc.on('panend', this.onPanEnd);
			this._scrollerEl.addEventListener(
				'transitionend',
				this.onTransitionEnd
			);
		});
	}

	componentWillUnmount() {
		if (!global.window) {
			return;
		}

		this.mc.off('panmove', this.onPanMove);
		this.mc.off('panend', this.onPanEnd);
		this.mc.off('panstart', this.onPanStart);
		this._scrollerEl.removeEventListener(
			'transitionend',
			this.onTransitionEnd
		);
		delete this.mc;
	}

	onPanStart = event => {
		event.preventDefault();
		this.setState(prevState => ({
			offset: 0,
			scrolling: true
		}));
	}

	onPanMove = event => {
		event.preventDefault();
		this.setState(prevState => {
			return {
				offset: event.deltaX / this._scrollerEl.offsetWidth * 100,
				scrolling: true
			};
		});
	}

	onPanEnd = event => {
		const threshold = this.props.threshold || 10;
		const { position, scrollToNextItem, scrollToPreviousItem }  = this.props;

		if (
			event.deltaX < -threshold &&
			scrollToNextItem &&
			position + 1 < this.props.children.length
		) {
			scrollToNextItem();
		} else if (
			event.deltaX > threshold &&
			scrollToPreviousItem &&
			position - 1 >= 0
		) {
			scrollToPreviousItem();
		}

		this.setState(prevState => {
			return {
				offset: 0,
				scrolling: false
			};
		});
	}

	onTransitionEnd = event => {
		if (this.props.onRoll) {
			this.props.onRoll();
		}
	}

	render() {
		const { children, position } = this.props;
		const { offset } = this.state;
		const itemCount = this.props.children.length;
		const offsetPercentage = position * -(100 / itemCount) + offset;

		const scrollerStyle = {
			transform: 'translate3d(' + offsetPercentage + '%, 0, 0)',
			transition: this.state.scrolling ? 'unset' : 'transform 0.5s'
		};

		return (
			<CarouselContainer innerRef={el => (this._containerEl = el)}>
				<CarouselScroller
					innerRef={el => (this._scrollerEl = el)}
					style={scrollerStyle}
					itemCount={itemCount}
				>
					{this.props.children}
				</CarouselScroller>
			</CarouselContainer>
		);
	}
}
