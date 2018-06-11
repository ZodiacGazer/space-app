import { fetchLaunch } from '../actions';
import { FETCH_LAUNCH_REQUEST, 
		 FETCH_LAUNCH_SUCCESS, 
		 FETCH_LAUNCH_FAILURE } from '../actionTypes';

const spacexReducer = (state=[], action) => {
	switch (action.type) {
		case FETCH_LAUNCH_SUCCESS: {
			return action.result;
		};
		default: {
			return state;
		}
	}
};

export default spacexReducer;