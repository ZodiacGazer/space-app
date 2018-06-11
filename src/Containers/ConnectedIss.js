import { connect } from 'react-redux';

// Components
import Iss from '../Components/Iss';

// Actions
import { fetchIssLocation } from '../actions';

const mapStateToProps = (state, props) => {
	const {issMembers, issLocation} = state;
	return {issMembers, issLocation};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchLocation: () => dispatch(fetchIssLocation())
	}
}

const ConnectedIss = connect(mapStateToProps, mapDispatchToProps)(Iss);

export default ConnectedIss;