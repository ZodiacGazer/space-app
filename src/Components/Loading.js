import React from 'react';

// Assets
import PreloadBg from '../assets/preload-bg.jpg';
import './Loading.css';

const Loading = ({ isLoading, style }) => (
	<section className={`section ${style}`}>
		<div className='section__block'>
			<div className='loader'></div>
		</div>
	</section>
);

export default Loading;