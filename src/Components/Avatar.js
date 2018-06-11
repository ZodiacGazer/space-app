import React from 'react';
import ReactDOM from 'react';

// Assets
import imgUrl from '../assets/avatar.jpg';
import './Avatar.css';

const Avatar = () => (
	<div className='avatar'>
		<div className='image__block'>
			<img className='image' src={imgUrl} />
		</div>
		<p className='avatar__text'>John Doe</p>
	</div>
);

export default Avatar;