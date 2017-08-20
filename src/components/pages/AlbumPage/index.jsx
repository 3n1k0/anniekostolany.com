import React from 'react';
import {photosPage} from './style.scss';
import BookNowButton from '../../BookNowButton';
import BasePage from '../BasePage';

export var Photo = (props) => (
	<img src={"http://images.andor.cool/eniko/" + props.file} />
);

export var AlbumPage = (props) => (
	<BasePage>
		<div className={photosPage}>
			{props.children}
			<BookNowButton />
		</div>
	</BasePage>
);
