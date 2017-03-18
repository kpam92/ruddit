import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: 'api/session',
		data: user,
		success,
		error
	});
};

export const signup = (user, success, error) => {
	$.ajax({
		method: 'POST',
		url: 'api/user',
		data: user,
		success,
		error
	});
};

export const logout = function(success){
	$.ajax({
		method: 'DELETE',
		url: 'api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};
