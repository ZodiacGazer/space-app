import React from 'react';
import { connect } from 'react-redux';

// Components
import Spacex from '../Components/Spacex';

const mapStateToProps = (state, props) => {
	const data = state.spacex;
	return {data};
}

const ConnectedSpacex = connect(mapStateToProps)(Spacex);

export default ConnectedSpacex;