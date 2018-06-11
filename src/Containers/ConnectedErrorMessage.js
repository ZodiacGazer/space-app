import { connect } from 'react-redux';

// Components
import ErrorMessage from '../Components/ErrorMessage';

const mapStateToProps = (state, props) => {
	return {
		message: state.error && state.error.message
	}
};

const ConnectedErrorMessage = connect(mapStateToProps)(ErrorMessage);

export default ConnectedErrorMessage;