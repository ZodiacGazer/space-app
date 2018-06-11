import React from 'react';

// Components
import Avatar from './Avatar';
import NavItem from './NavItem';

import Spacex from './Spacex';

// Assets
import './Navigation.css';

// Test


const Navigation = () => {
	const items = ['spacex', 'apod', 'iss', 'random'];
	return ( 
		<React.Fragment>
			<ul className='nav__list'>
				{items.map((item, i) => <NavItem name={item} key={i.toString()} />)}
			</ul>
		</React.Fragment>
	)
};

export default Navigation;