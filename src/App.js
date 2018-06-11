import React from 'react';
import ReactDOM from 'react';

// Components
import Header from './Components/Header';
import Main from './Components/Main';
import ConnectedLoading from './Containers/ConnectedLoading';
import ConnectedSpacex from './Containers/ConnectedSpacex';
import ConnectedApod from './Containers/ConnectedApod';
import ConnectedIss from './Containers/ConnectedIss';
import Iss from './Components/Iss';
import Loading from './Components/Loading';
import NotFound from './Components/404';



// TEST
import ConnectedErrorMessage from './Containers/ConnectedErrorMessage';

// Routing
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Store
import { Provider } from 'react-redux';

const App = ({store}) => (
	<Provider store={store}>
		<Router>
			<React.Fragment>
				<Header  />
				<Switch>
					<Route exact path='/' render={() => <Redirect to='/spacex' />} />
					<Route path='/spacex' component={ConnectedSpacex} />
					<Route path='/apod' component={ConnectedApod} />
					<Route path='/iss' component={ConnectedIss} />
					<Route component={NotFound} />
				</Switch>
			</React.Fragment>
		</Router>
	</Provider>
);

export default App;