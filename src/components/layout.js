/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Content, Footer } from '../styles/components';
import Header from './header';
import './layout.css';
import { Fragment } from 'react';

const Layout = ({ children }) => (
	<Fragment>
		<Header />
		<Content>
			<main>{children}</main>
			<Footer>
				Con {''} ❤️ {''}por
				<a href="https://github.com/davidlechuga">DavidLechuga</a>
			</Footer>
		</Content>
	</Fragment>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
