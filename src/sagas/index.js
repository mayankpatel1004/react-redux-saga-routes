import { all, takeLatest } from "redux-saga/effects";
import { REQUEST_HOME_API_DATA,REQUEST_BLOGS_DATA,REQUEST_CONTACT_DATA } from '../constants/actionTypes';

import fetchHome from './fetchHome';
import fetchBlogs from './fetchBlogs';
import fetchNews from './fetchNews';
import fetchContact from './fetchContact';

function* actionWatcher() {
    yield takeLatest('GET_NEWS',fetchNews);
    yield takeLatest(REQUEST_BLOGS_DATA,fetchBlogs);
    yield takeLatest(REQUEST_HOME_API_DATA, fetchHome);
    yield takeLatest(REQUEST_CONTACT_DATA,fetchContact);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}