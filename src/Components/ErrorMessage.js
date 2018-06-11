import React from 'react';

// Assets
import './ErrorMessage.css';

const ErrorMessage = ({message}) => (
	message
	   ?
	   <div className='error__container'>
	   		<span style={{color: 'red'}}>Error: {message}</span>
	   </div>
	   :
	   null
);

export default ErrorMessage;