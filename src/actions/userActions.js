import * as types from './actionTypes';
import userApi from '../api/mockUserApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function createUserSuccess(user) {
  return {type: types.CREATE_USER_SUCCESS, user};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, user};
}

export function signupUser(user) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
 
    return userApi.saveUser(user).then(user => {
      user.id ? dispatch(updateUserSuccess(user)) :
        dispatch(createUserSuccess(user));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
