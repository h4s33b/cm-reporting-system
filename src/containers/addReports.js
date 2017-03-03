import { connect } from 'react-redux';
import AddReports from '../components/reports/addReports';
import { loadInitialState } from '../store/actions/loadInitialState';
import { addReportRequest } from '../store/actions/addReportRequest';
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
    addNewReports          : (reportData) => dispatch(addReportRequest(reportData))
  };
}

const AddReportContainer = connect(mapStateToProps, mapDispatchToProps)(AddReports);

export default AddReportContainer;