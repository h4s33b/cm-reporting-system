import ActionTypes from '../actions/actionTypes';

const initial_state = { };
export function applicationReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LoadInitialState: {
      return state;
    }
    case ActionTypes.LoginRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.SignUpRequestSuccess: {
      var newState = Object.assign({}, state, { user: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.requiredBloodRequestSuccess: {
      var newState = Object.assign({}, state, { allBloods: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.updateBloodRequestSuccess: {
      var newState = Object.assign({}, state, { allBloods: action.data });
      state = newState;
      return state;
    }
    case ActionTypes.logOutRequestSuccess: {
      var newState = Object.assign({});
      state = newState;
      return state;
    }
    case ActionTypes.loadUserRequest: {
      var newState = Object.assign({}, state);
      state = newState;
      return state;
    }
    case ActionTypes.addReportRequestSuccess: {
      var newState = Object.assign({}, state);
      state = newState;
      return state;
    }
  case ActionTypes.loadCrimesRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
  case ActionTypes.loadCrimesRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
  case ActionTypes.loadMyIncidentsRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
  case ActionTypes.viewAllCrimesRequestSuccess: {
      var newState = Object.assign({}, state, { allCrimes: action.data });
      state = newState;
      return state;
    }
  case ActionTypes.addedReportRequestSuccess : {
    var newState = Object.assign({}, state);
      newState.allCrimes = newState.allCrimes || [];
      if(action.todos){
        newState.allCrimes.push(action.todos);
      }
      state = newState;
      return state;
  }
    default:
      return state;
  }
}