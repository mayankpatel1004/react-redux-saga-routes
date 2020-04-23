import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import blogsReducer from './blogsReducer';

const rootReducer = combineReducers({
    newsReducer:newsReducer,
    blogsReducer:blogsReducer
});

export default rootReducer;