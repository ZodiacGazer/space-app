import React from 'react';

// Components
import SocItem from './SocItem';

// Assets

import './Social.css';

const Social = () => {
	const items = ['fab fa-github', 'fas fa-user-secret'];
	return (
		<ul className="social__list">
			{items.map((item, i) => <SocItem icon={item} key={i.toString()} />)}
		</ul>
	)
};

export default Social;