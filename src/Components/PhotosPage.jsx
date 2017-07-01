import React from 'react';
import Photo from './Photo.jsx';
import style from '../photos.scss';

export default class PhotosPage extends React.Component {
	render() {
		return (
			<div>
				<h2>Photos</h2>
				<Photo file="34517310863_ea0155695e_k"/>
				<Photo file="35458333832_6494e862d1_k"/>
				<Photo file="35587959575_c08709f959_k"/>
			</div>
		);
	}
}
