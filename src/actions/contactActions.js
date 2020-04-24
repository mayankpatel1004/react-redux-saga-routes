import {REQUEST_CONTACT_DATA,RECEIVE_CONTACT_DATA} from '../constants/actionTypes';

export const requestContactData = (data) => ({type: REQUEST_CONTACT_DATA,data})
export const receiveContactData = (data) => ({type: RECEIVE_CONTACT_DATA})