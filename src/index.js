import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginContainer from './containers/login';
import SignUpContainer from './containers/signup';
import rootMainContainer from './containers/rootContainer';
import DashboardContainer from './containers/dashboard';
import AddReportContainer from './containers/addReports';
import ViewCrimeContainer from './containers/viewCrimes';
import LoadMyIncidentsContainer from './containers/loadMyIncidents';
import ViewAllCrimesContainer from './containers/viewAllCrimes';
import adminDashboardContainer from './containers/adminContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import * as mat from 'material-ui';

import {
  browserHistory,
  Router,
  Route,
  IndexRoute,
  IndexRedirect,
  Link,
  IndexLink
} from 'react-router';

class RootComponent extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Provider store={store}>
            <Router history={browserHistory}>
              <Route path="/" component={rootMainContainer}>
                <IndexRedirect to="/login" />
                <Route path="/dashboard" component={DashboardContainer} />
                <Route path="/addReport" component={AddReportContainer} />
                <Route path="/myIncidents" component={LoadMyIncidentsContainer} />     
                <Route path="/viewAllCrimes" component={ViewAllCrimesContainer} />      
              </Route>
              <Route path="/login" component={LoginContainer}>
              </Route>
              <Route path="/signup" component={SignUpContainer}>
              </Route>
              <Route path="/viewCrimes" component={ViewCrimeContainer}>
              </Route>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

ReactDOM.render((
  <RootComponent />
),
  document.getElementById('root')
);
