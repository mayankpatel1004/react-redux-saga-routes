import { all, takeLatest } from "redux-saga/effects";
import { REQUEST_HOME_API_DATA,REQUEST_BLOGS_DATA } from '../constants/actionTypes';

import fetchHome from './fetchHome';
import fetchBlogs from './fetchBlogs';
import fetchNews from './fetchNews';

function* actionWatcher() {
    yield takeLatest('GET_NEWS',fetchNews);
    yield takeLatest(REQUEST_BLOGS_DATA,fetchBlogs);
    yield takeLatest(REQUEST_HOME_API_DATA, fetchHome);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}