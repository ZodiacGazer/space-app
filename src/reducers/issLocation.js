import {
	FETCH_ISS_OK,
	FETCH_ISS_ERROR
	   			} from '../actionTypes';
import { fetchIssLocation } from '../actions';

const issLocationReducer = (state={}, action) => {
	switch (action.type) {
		case FETCH_ISS_OK: {
			return action.result
		};
		default: {
			return state;
		}
	}
};

export default issLocationReducer;

