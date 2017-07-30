import React from 'react';
import {photosPage} from './style.scss';

export var Photo = (props) => (
	<img src={"/photos/" + props.file + ".jpg"} />
);

export var AlbumPage = (props) => (
	<div className={photosPage}>
		{props.children}
	</div>
);
