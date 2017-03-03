import { connect } from 'react-redux';
import ViewCrimes from '../components/reports/viewCrimes';
import { loadInitialState } from '../store/actions/loadInitialState';
import { loadCrimesRequest } from '../store/actions/loadCrimes';
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
    loadCrimesRequest   : () => dispatch(loadCrimesRequest())
  };
}

const AddReportContainer = connect(mapStateToProps, mapDispatchToProps)(ViewCrimes);

export default AddReportContainer;