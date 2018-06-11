import { createStore } from 'redux';
import middleware from './middleware';
import appReducer from '../reducers';

const store = createStore(appReducer, {}, middleware);

export default store;