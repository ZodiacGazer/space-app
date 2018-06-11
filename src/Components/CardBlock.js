import React from 'react';

// Components
import Card from './Card';

// Assets
import Sattelite from '../assets/sattelite.png';
import './Card.css';

const CardBlock = ({payload_id:id, payload_mass_kg:mass, orbit, payload_type: type}) => {
	return (
		<React.Fragment>
			<Card statick rounded stick area='108'>
				<i className="fas fa-broadcast-tower card-icon"></i>
				<h4>{type}</h4>
			</Card>
			<Card statick rounded stick area='108'>
				<i className="fas fa-clipboard card-icon"></i>
				<h4>{id}</h4>
			</Card>
			<Card statick rounded stick area='108'>
				<i className="fas fa-weight card-icon"></i>
				<h4>{mass} kg</h4>
			</Card>
			<Card statick rounded area='108'>
				<i className="fas fa-globe card-icon"></i>
				<h4>{orbit}</h4>
			</Card>
		</React.Fragment>
	)
};

export default CardBlock;