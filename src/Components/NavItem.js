import React from 'react';

// React Router
import { Link } from 'react-router-dom';

// Assets
import './NavItem.css';

const NavItem = ({name}) => (
		<React.Fragment>
			<Link to={`/${name}`}>
				<li className="nav__item">{name}</li>
			</Link>
		</React.Fragment>
);

export default NavItem;