export const UserConstants = {
  FETCH_ALL_USERS: "FETCH_ALL_USERS",
  RECEIVE_ALL_USERS: "RECEIVE_ALL_USERS",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
  RECEIVE_SINGLE_USER: "RECEIVE_SINGLE_USER",
  GO_TO_PROFILE: "GO_TO_PROFILE"
};

export const fetchAllUsers = () => ({
  type: UserConstants.FETCH_ALL_USERS
});

export const receiveAllUsers = users => ({
  type: UserConstants.RECEIVE_ALL_USERS,
  users
});
export const receiveSingleUser = user => ({
  type: UserConstants.RECEIVE_SINGLE_USER,
  user
});
export const goToProfile = id => ({
  type: UserConstants.GO_TO_PROFILE,
  id
});

export const receiveErrors = errors => ({
  type: UserConstants.RECEIVE_ERRORS,
  errors
});
