import React from 'react';

// Assets
import './Spacex.css';
import Rocket from '../assets/falcon9.png';
import Sattelite from '../assets/sattelite.png';

// Components
import Card from './Card';
import Flag from './Flag';
import CardBlock from './CardBlock';
import ConnectedLoading from '../Containers/ConnectedLoading';

const Spacex = ({data : spacex}) => {
	if (spacex.rocket) { // stupid checking if object is not empty
		return (
			<section className='section spacex'>
				<div className='section__block'>
					<div className='section__title'>
						<i className="fas fa-space-shuttle spacex-icon"></i>
						<h2 className='title'>SpaceX</h2>
					</div>
					<Flag>
						Flight: {spacex.flight_number}
					</Flag>
					<div className='section__info'>
						<img className='section__pic' src={Rocket} />

						<Card>
							<p>Rocket: <b>{spacex.rocket.rocket_name}</b></p>
						</Card>
						<Card top='100'>
							<p>Reuse Core: <b>{spacex.reuse.core ? 'True' : 'False'}</b></p>
						</Card>
						<Card top='200'>
							<p>Launch site: <b>{spacex.launch_site.site_name_long}</b></p>
						</Card>
					</div>
					<div className='section__block'>
						<Flag>
							Payloads
						</Flag>
						<div className='payload'>
							{spacex.rocket.second_stage.payloads.map((payload, i) => (
								<CardBlock {...payload} key={i.toString()} />
							))}
						</div>
					</div>
				</div>
			</section>
		)
	} else {
		return (
			<ConnectedLoading style='spacex' />
		)
	}
};

export default Spacex;