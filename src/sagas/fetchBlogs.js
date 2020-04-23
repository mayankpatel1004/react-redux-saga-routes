import { put } from 'redux-saga/effects';

function* fetchBlogs() {
    //console.log('fetch news method called........');
    const json = yield fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    //console.log('Saga Request ===>',json);
    yield put({ type: "BLOGS_RECEIVED", json: json });
}

export default fetchBlogs;