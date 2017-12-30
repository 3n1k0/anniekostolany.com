import React from 'react';
import { Route } from 'react-router-dom';
import ApplicationShell from './components/ApplicationShell';
import routes from './routes.jsx';

export default () => (
	<ApplicationShell>
		{ routes.map((route, index) => <Route {...route} key={index} />) }
	</ApplicationShell>
);
