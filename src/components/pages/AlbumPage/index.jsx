import React from 'react';
import {photosPage} from './style.scss';
import BookNowButton from '../../BookNowButton';

export var Photo = (props) => (
	<img src={"http://images.andor.cool/eniko/" + props.file} />
);

export var AlbumPage = (props) => (
	<div className={photosPage}>
		{props.children}
		<BookNowButton />
	</div>
);
