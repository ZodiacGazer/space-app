import React from 'react';

// Components
import Avatar from './Avatar';
import Navigation from './Navigation';
import Social from './Social';

// Assets
import './Header.css';

const Header = () => (
	<header className="header">
		<Avatar />
		<Navigation />
		<Social />
	</header>
)

export default Header;