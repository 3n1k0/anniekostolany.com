import React from 'react';

export default class RatesDownloadLink extends React.Component {
	constructor() {
		super();
		this.trackEvent.bind(this);
	}

	trackEvent() {
		window.ga('send', 'event', 'files', 'dowload', 'anniekostolany_rates2017.pdf');
	}

	render() {
		return (
			<a href="https://anniekostolany.com/files/anniekostolany_rates2017.pdf"
				target="_blank"
				onClick={this.trackEvent}
			>
				{this.props.children}
			</a>
		);
	}
}
