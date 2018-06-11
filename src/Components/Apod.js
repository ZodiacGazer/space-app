import React from 'react';

// Animation
import { CSSTransition } from 'react-transition-group';

// Assets
import './Apod.css';

// Components
import Flag from './Flag';
import Card from './Card';
import ConnectedLoading from '../Containers/ConnectedLoading';

class Apod extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;

		this.handleBack = this.handleBack.bind(this);
		this.handleForth = this.handleForth.bind(this);
		this.checkDate   = this.checkDate.bind(this);
	}
	static getDerivedStateFromProps(props, state) {
		console.log(state.loading)
		return {...props}
	}

	timeHelper(param) {
		const DAY_IN_MS = (1000*60*60*24); 
		let currentDate = new Date(this.state.data.date).getTime();
		switch (param) {
			case 'back': {
				return currentDate - DAY_IN_MS;
			}
			case 'forth': {
				return currentDate + DAY_IN_MS;
			}
			default: {
				return currentDate;
			}
		}
	}
	handleBack() {
		let currentDate = new Date(this.timeHelper('back')).toISOString().split('T')[0];
		this.props.fetchBack(currentDate);
	};
	handleForth() {
		let currentDate = new Date(this.timeHelper('forth')).toISOString().split('T')[0];
		this.props.fetchBack(currentDate);
	}
	checkDate(date) {
		let today = new Date().toISOString().split('T')[0];
		return today != new Date(date).toISOString().split('T')[0];
	}
	render() {
		if (this.state.data.url) {
			const { title, url, hdurl, explanation, date, media_type:type } = this.state.data;
			return (
				<section className='section apod'>
					<React.Fragment>
						<div className='section__block'>
							<div className='section__title'>
								<i className="fas fa-camera"></i>
								<h2 className='title'>Astronomy picture</h2>
							</div>
							<Flag>
								{title}
							</Flag>
							<div className='section__info center'>
								<CSSTransition
									in={!this.state.loading}
									timeout={1000}
									unmountOnExit
									classNames='fetchingApod'
								>
									{type == 'image' ? 
										<a href={hdurl} target='_blank'><img className='section__pic inline' src={url} alt='HD' /></a>
													 : 
									<iframe src={url} frameBorder='0' allowFullScreen className='section__video inline'></iframe>
									}
								</CSSTransition>
								<i onClick={this.handleBack} className="fas fa-arrow-circle-left apod-icon left"></i>
								{this.checkDate(this.state.data.date) &&
									<i onClick={this.handleForth} className="fas fa-arrow-circle-right apod-icon right"></i>
								}
							</div>
						</div>
						<div className='section__block' style={{marginBottom: '30px'}}>
							<h4 style={{textAlign: 'center', marginBottom: '10px'}}>{date}</h4>
							<p>{explanation}</p>
						</div>
					</React.Fragment>
				</section>
			)
		} else {
		return (
			<ConnectedLoading style='apod' />
		)
		}
	}
}

// const Apod = ({data: apod}) => {
// 	return (
// 		<section className='section apod'>
// 			<div className='section__block'>
// 				<div className='section__title'>
// 					<i className="fas fa-camera"></i>
// 					<h2 className='title'>Astronomy picture</h2>
// 				</div>
// 				<Flag>
// 					{apod.title}
// 				</Flag>
// 				<div className='section__info'>
// 					<a href={apod.hdurl} target='_blank'><img className='section__pic' src={apod.url} alt='HD' /></a>
// 				</div>
// 			</div>
// 			<div className='section__block' style={{marginBottom: '30px'}}>
// 				<h4 style={{textAlign: 'center', marginBottom: '10px'}}>{apod.date}</h4>
// 				<p>{apod.explanation}</p>
// 			</div>
// 			<button>Back</button>
// 		</section>
// 	)
// };

export default Apod;