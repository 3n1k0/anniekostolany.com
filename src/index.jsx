import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu.jsx';
import Gallery from './Components/Gallery.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Menu></Menu>
				<h1>Hello Eniko!</h1>
				<Gallery></Gallery>
			</div>
		);
	}
}

ReactDOM.render(
	<App></App>,
	document.getElementById('root')
);
