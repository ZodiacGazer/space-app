import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './src/App';

// Store
import { fetchLaunch } from './src/actions';
import { fetchPicture, fetchIssMembers, fetchIssLocation } from './src/actions';


import store from './src/store';
store.dispatch(fetchLaunch());
store.dispatch(fetchPicture());
store.dispatch(fetchIssMembers());
store.dispatch(fetchIssLocation());




ReactDOM.render (
	<App store={store} />,
	document.getElementById('root')
)


