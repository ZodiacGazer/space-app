import {
	FETCH_ISS_OK,
	FETCH_ISS_ERROR
	   			} from '../actionTypes';
import { IssLocation } from '../utils';

export const fetchIssLocation = () => (dispatch) => {
	fetch(IssLocation)
		.then(res => res.json())
		.then(data => {
			dispatch({type: FETCH_ISS_OK, result: data})
		})
		.catch(error => {
			dispatch({type: FETCH_ISS_ERROR, error})
		})
};