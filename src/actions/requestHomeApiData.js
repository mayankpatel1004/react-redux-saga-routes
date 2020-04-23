import { REQUEST_HOME_API_DATA, RECEIVE_HOME_API_DATA } from '../constants/actionTypes';

export const requestHomeApiData = () => ({ type: REQUEST_HOME_API_DATA });
export const receiveHomeApiData = data => ({ type: RECEIVE_HOME_API_DATA, data });
