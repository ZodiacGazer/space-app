import { FetchPicture } from '../actions';
import { FETCH_APOD_REQUEST,
		 FETCH_APOD_SUCCESS,
		 FETCH_APOD_FAILURE } from '../actionTypes';

const apodReducer = (state={}, action) => {
	switch (action.type) {
		case FETCH_APOD_SUCCESS: {
			return action.result;
		};
		default: {
			return state;
		}
	}
};

export default apodReducer;