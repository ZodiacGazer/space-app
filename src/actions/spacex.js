import { FETCH_LAUNCH_REQUEST, 
		 FETCH_LAUNCH_SUCCESS, 
		 FETCH_LAUNCH_FAILURE } from '../actionTypes';
import { NextLaunch, LastLaunch } from '../utils';


export const fetchLaunch = () => (dispatch) => {
	dispatch({type: FETCH_LAUNCH_REQUEST});
	fetch(NextLaunch)
	.then(res => res.json())
	.then(data => {
		dispatch({type: FETCH_LAUNCH_SUCCESS, result: data})
	})
	.catch(error => {
		dispatch({type: FETCH_LAUNCH_FAILURE, error})
	})
};