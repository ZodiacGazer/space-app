import React from 'react';
import { connect } from 'react-redux';

// Components
import Apod from '../Components/Apod';

// Actions
import { fetchPicture } from '../actions';

const mapStateToProps = (state, props) => {
	const data = state.apod;
	const loading = state.loading.FETCH_APOD;
	return { data,
			 loading };
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchBack: (date='') => dispatch(fetchPicture(date))
	}
}

const ConnectedApod = connect(mapStateToProps, mapDispatchToProps)(Apod);

export default ConnectedApod;