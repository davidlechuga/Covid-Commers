import React from 'react';

import SEO from '../components/seo';
import Fragment from 'react';

const NotFoundPage = () => (
	<Fragment>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Fragment>
);

export default NotFoundPage;
