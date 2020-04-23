// import { combineReducers } from 'redux';
// import newsReducer from './newsReducer';
// import blogsReducer from './blogsReducer';
// import requestApiData from './requestApiData';

// const rootReducer = combineReducers({
//     newsReducer:newsReducer,
//     blogsReducer:blogsReducer,
//     requestApiData:requestApiData
// });

// export default rootReducer;


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