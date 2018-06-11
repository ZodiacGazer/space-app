import { connect } from 'react-redux';
import Loading from '../Components/Loading';

const mapStateToProps = (state, props) => {
	const { loading } = state;
	const isLoading = Object.keys(loading).reduce((acc, reqName) => {
		if (acc === true) return false;
		if (loading[reqName] > 0) return true;
		return false;
	}, false);
	return { isLoading };
}

const ConnectedLoading = connect(mapStateToProps)(Loading);
export default ConnectedLoading;