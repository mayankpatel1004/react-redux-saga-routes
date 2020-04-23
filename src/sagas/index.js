import { all, takeLatest } from "redux-saga/effects";
import { REQUEST_HOME_API_DATA } from '../constants/actionTypes';

import fetchHome from '../sagas/fetchHome';

import fetchBlogs from './fetchBlogs';
import fetchNews from './fetchNews';

function* actionWatcher() {
    yield takeLatest('GET_NEWS',fetchNews);
    yield takeLatest('GET_BLOGS',fetchBlogs);
    yield takeLatest(REQUEST_HOME_API_DATA, fetchHome);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}