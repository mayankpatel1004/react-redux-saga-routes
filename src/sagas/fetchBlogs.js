import { put } from 'redux-saga/effects';

function* fetchBlogs() {
    const json = yield fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    yield put({ type: "RECEIVE_BLOGS_DATA", json: json });
}
export default fetchBlogs;