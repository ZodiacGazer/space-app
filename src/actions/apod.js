import { FETCH_APOD_REQUEST,
		 FETCH_APOD_SUCCESS,
		 FETCH_APOD_FAILURE } from '../actionTypes';

import { LastPicture } from '../utils';

export const fetchPicture = (date='') => (dispatch) => {
	dispatch({type: FETCH_APOD_REQUEST});
	fetch(`${LastPicture}&date=${date}`)
		.then(res => res.json())
		.then(data => {
			dispatch({ type: FETCH_APOD_SUCCESS, result: data })
		})
		.catch(error => {
			dispatch({ type: FETCH_APOD_FAILURE, error})
		})
};
