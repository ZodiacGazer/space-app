const errorReducer = (state={}, action) => {
	if (action.type.endsWith('_FAILURE')) {
		return action.error;
	}
	return state;
};

export default errorReducer;