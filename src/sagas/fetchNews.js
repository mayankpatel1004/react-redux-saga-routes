import { put } from 'redux-saga/effects';

function* fetchNews() {
    //console.log('fetch news method called........');
    const json = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());
    //console.log('Saga Request ===>',json);
    yield put({ type: "NEWS_RECEIVED", json: json });
}

export default fetchNews;