import React from 'react';

// Assets
import './Card.css';

const Card = ({top, rounded, area, statick, children}) => {
	let round = rounded ? 'rounded' : '';
	let s = statick ? 'statick' : null;
	return (
		<div className={`card ${round} ${s}`} style={{top: `${top}px`, width: `${area}px`, height: `${area}px`, justifyItems: 'center'}}>
			{children}
		</div>
	);
};

export default Card;