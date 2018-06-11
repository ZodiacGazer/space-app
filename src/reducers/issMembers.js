import {
		FETCH_MEMBERS_REQUEST,
		FETCH_MEMBERS_SUCCESS,
		FETCH_MEMBERS_FAILURE
	   							} from '../actionTypes';

import { fetchIssMembers } from '../actions';

const issMembersReducer = (state={}, action) => {
	switch (action.type) {
		case FETCH_MEMBERS_SUCCESS: {
			return action.result;
		}
		default: {
			return state;
		}
	}
};

export default issMembersReducer;