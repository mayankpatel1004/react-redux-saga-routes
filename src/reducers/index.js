import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import blogsReducer from './blogsReducer';
import contactReducer from './contactReducer';
import requestHomeApiData from './requestHomeApiData';

const rootReducer = combineReducers({
    newsReducer:newsReducer,
    blogsReducer:blogsReducer,
    contactReducer:contactReducer,
    homeData:requestHomeApiData
});

export default rootReducer;