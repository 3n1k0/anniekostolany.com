import React from 'react';
import ApplicationShell from './components/ApplicationShell';
import routes from './routes.jsx';

export default () => (
	<ApplicationShell>
		{ routes }
	</ApplicationShell>
);
