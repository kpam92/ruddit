import merge from 'lodash/merge';
import {SessionConstants} from "../actions/session_actions";

const defaultState = Object.freeze({currentUser: null, errors:[]});

const SessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:

      const currentUser = action.currentUser
      return merge({}, state = defaultState, {currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState, {errors});
    case SessionConstants.LOGOUT:
      return  merge({}, defaultState);
    default:
      return state
  }
};

export default SessionReducer;
