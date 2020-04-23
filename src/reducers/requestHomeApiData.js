import { RECEIVE_HOME_API_DATA } from '../constants/actionTypes';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_HOME_API_DATA:
      console.log("Mayank ===>",data);
      return data;
    default:
      return state;
  }
};
