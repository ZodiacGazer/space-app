import React from 'react';

// Assets
import './Flag.css';

const Flag = ({children}) => (
	<div className='flag'>
		<h2 className='flag__container'>
			{children}
		</h2>
	</div>
)

export default Flag;