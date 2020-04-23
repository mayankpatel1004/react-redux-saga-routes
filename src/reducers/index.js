import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import blogsReducer from './blogsReducer';
import requestHomeApiData from './requestHomeApiData';

const rootReducer = combineReducers({
    newsReducer:newsReducer,
    blogsReducer:blogsReducer,
    homeData:requestHomeApiData
});

export default rootReducer;