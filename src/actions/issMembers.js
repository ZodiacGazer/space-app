import {
		FETCH_MEMBERS_REQUEST,
		FETCH_MEMBERS_SUCCESS,
		FETCH_MEMBERS_FAILURE
	   							} from '../actionTypes';

import { IssMembers } from '../utils';

export const fetchIssMembers = () => (dispatch) => {
	dispatch({type: FETCH_MEMBERS_REQUEST});
	fetch(IssMembers)
		.then(res => res.json())
		.then(data => {
			dispatch({type: FETCH_MEMBERS_SUCCESS, result: data})
		})
		.catch(error => {
			dispatch({type: FETCH_MEMBERS_FAILURE, error})
		})
};