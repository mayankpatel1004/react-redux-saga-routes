import { call, put } from "redux-saga/effects";
import { receiveHomeApiData } from "../actions/homeActions";
import { fetchHomeData } from '../api/fetchHomeData';

function* getApiData(action) {
    try {
      const data = yield call(fetchHomeData);
      yield put(receiveHomeApiData(data));
    } catch (e) {
      console.log(e);
    }
  }
  export default getApiData;