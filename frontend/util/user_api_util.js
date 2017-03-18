import { receiveAllUsers, receiveErrors, receiveSingleUser } from '../actions/user_actions';

export const fetchAllUsers = function(success, error) {
	$.ajax({
		method: 'GET',
		url: 'api/users',
		success,
		error
	});
};

export const fetchSingleUser = function(id, success, error) {
	$.ajax({
		method: 'GET',
		url: `api/users/${id}`,
		success,
		error
	});
};
