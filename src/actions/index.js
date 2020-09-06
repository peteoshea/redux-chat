import * as types from '../constants/ActionTypes';

let nextUserId = 0;

export const addUser = (name) => ({
  type: types.ADD_USER,
  id: nextUserId++,
  name,
});

export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users,
});
