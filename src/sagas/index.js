import { all, takeLatest } from 'redux-saga/effects';
import fetchNews from './fetchNews';
import fetchBlogs from './fetchBlogs';

function* actionWatcher() {
    yield takeLatest('GET_NEWS',fetchNews);
    yield takeLatest('GET_BLOGS',fetchBlogs);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}