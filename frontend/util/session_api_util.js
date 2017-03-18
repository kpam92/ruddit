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



};
