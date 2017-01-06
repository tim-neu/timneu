//Libs
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

// Components
import App from './index.js';
import Home from './components/Home.js';

// Routes
const routes = (
	<Route path="/" component={App}>
		<IndexRedirect to="/home" />
	  <Route path="home" component={Home} />
	</Route>
);

export default routes;