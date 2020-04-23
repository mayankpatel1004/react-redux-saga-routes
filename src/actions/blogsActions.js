import { REQUEST_BLOGS_DATA,RECEIVE_BLOGS_DATA} from '../constants/actionTypes';

export const requestBlogsData = () => ({type : REQUEST_BLOGS_DATA})
export const receiveBlogsData = (data) => ({type : RECEIVE_BLOGS_DATA})