export const SessionConstants = {
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS"
};

export const signup = user => ({
  type: SessionConstants.SIGNUP,
  user
});

export const login = user => ({
  type: SessionConstants.LOGIN,
  user
});

export const logout = () => ({
  type: SessionConstants.LOGOUT
});

export const receiveCurrentUser = currentUser => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});
