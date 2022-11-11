import Api from '../../api';

import {
  SET_AUTH_USER,
  SET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  SEARCH_USER
} from '../action-types';

export function setAuthUser(user) {
  return {
    type: SET_AUTH_USER,
    payload: { user }
  };
}

export function setUsers(users) {
  return {
    type: SET_USERS,
    payload: { users }
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: { user }
  };
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: { user }
  };
}

export function deleteUser(user) {
  return {
    type: DELETE_USER,
    payload: { user }
  };
}

// Async functions

export function setUsersAsync() {
  return async (dispatch) => {
    const users = await Api.user.all();

    dispatch(setUsers(users));
  };
}

export function addUserAsync(values) {
  return async (dispatch) => {
    const user = await Api.user.create(values);
    if (user.error) return user;

    dispatch(addUser(user));
    return user;
  };
}

export function updateUserAsync(values) {
  return async (dispatch) => {
    const user = await Api.user.update(values);
    if (user.error) return user;

    dispatch(updateUser(user));
    return user;
  };
}

export function deleteUserAsync(values) {
  return async (dispatch) => {
    const user = await Api.user.delete(values);
    if (user.error) return user;

    dispatch(deleteUser(user));
    return user;
  };
}