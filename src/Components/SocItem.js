import React from 'react';

// Assets
import './SocItem.css';

const SocItem = ({icon}) => (
	<React.Fragment>
		<li className='social__item'>
			<a href="#"><i className={`${icon} soc__icon`}></i></a>
		</li>
	</React.Fragment>
);

export default SocItem;