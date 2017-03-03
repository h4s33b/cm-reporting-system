import { connect } from 'react-redux';
import LoadMyIncident from '../components/reports/loadMyIncidents';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadMyIncidentsRequest } from '../store/actions/loadMyIncidents';
import { loadUserRequest } from '../store/actions/loadUserData';
import { childAddedHandler } from '../store/actions/childAddedHandler';

function mapStateToProps(state) {
  //here we are mapping the redux state to props so we can use it in our components
  return {
    application: state.application
  };
}

function mapDispatchToProps(dispatch) {
  childAddedHandler(dispatch);
  //Those will be the actions we will be Triggerening from Components
  return {
    loadInitialState    : () => dispatch(loadInitialState()),
    loadUserRequest     : () => dispatch(loadUserRequest()),
    loadMyIncidentsRequest   : (data) => dispatch(loadMyIncidentsRequest(data))
  };
}

const LoadMyIncidentsContainer = connect(mapStateToProps, mapDispatchToProps)(LoadMyIncident);

export default LoadMyIncidentsContainer;