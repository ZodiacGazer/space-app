import React from 'react';

// Assets
import './404.css';

const NotFound = () => (
	<section className='section'>
		<div className='section__block'>
			<h2 className='notfound__title'>You are lost!</h2>
			<i className="fas fa-glasses notfound__icon"></i>
			<p style={{textAlign: 'center'}}>The page you are looking for was not found!</p>
		</div>
	</section>
);

export default NotFound;