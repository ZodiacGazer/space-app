import { combineReducers } from 'redux';
import spacexReducer from './spacex';
import loadingReducer from './loading';
import apodReducer from './apod';
import issMembersReducer from './issMembers';
import issLocationReducer from './issLocation';
import errorReducer from './error';

const appReducer = combineReducers({
	spacex: spacexReducer,
	apod: apodReducer,
	issMembers: issMembersReducer,
	issLocation: issLocationReducer,
	loading: loadingReducer,
	error: errorReducer
});

export default appReducer;