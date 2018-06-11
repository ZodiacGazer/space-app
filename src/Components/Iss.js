import React from 'react';

// Components
import Card from './Card';
import Flag from './Flag';
import Loading from './Loading';



// Assets
import './Iss.css';
import issIcon from '../assets/iss-icon.png';
import AstronautIcon from '../assets/astronaut-icon.png';

class Iss extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;

	}
	componentDidMount() {
		let myLatLng = {lat: -34.397, lng: 150.644};
		this.map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: myLatLng,
			streetViewControl: false
		});
		const icon = {
			url: issIcon,
			scaledSize: new google.maps.Size(50, 50),
			origin: new google.maps.Point(0,0),
    		anchor: new google.maps.Point(0, 0)
		}
	 	this.issMarker = new google.maps.Marker({
          position: {lat: -34, lng: 151},
          map: this.map,
          icon: icon
        });
        this.timerId = setInterval(() => {
        	this.props.fetchLocation();
        	let coords = this.props.issLocation.iss_position;
        	let latlng =  new google.maps.LatLng(coords.latitude, coords.longitude);
			this.issMarker.setPosition(latlng);
			this.map.setCenter(latlng);
        }, 5000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		let { people } = this.props.issMembers;
		return (
			<section className='section iss'>
				<div className='section__block'>
					<div className='section__title'>
						<i className="fab fa-rocketchat"></i>
						<h2>International Space Station</h2>
					</div>
					<Flag>
						Some info
					</Flag>
					<div className='section__info'>
						<div id='map'></div>
					</div>
				</div>
				<div className='section__block'>
					<Flag>
						Current members
					</Flag>
					<div className='crew'>
						{people.map((person, i) => {
							if (person.craft == 'ISS') {
								return (
									<Card statick rounded area='300' key={i.toString()}>
										<img className='astronaut__pic' src={AstronautIcon} />
										<h3>{person.name}</h3>
									</Card>
								)
							}
						})}
					</div>
				</div>
			</section>
		)
	}
}

export default Iss;