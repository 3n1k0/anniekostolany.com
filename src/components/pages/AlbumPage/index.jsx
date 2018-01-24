import React from 'react';
import { photosPage } from './style.scss';
import BookNowButton from '../../BookNowButton';

export const Photo = props => (
	<img src={'http://images.andor.cool/eniko/' + props.file} />
);

export const AlbumPage = props => (
	<div className={photosPage}>
		{props.children}
		<BookNowButton />
	</div>
);
