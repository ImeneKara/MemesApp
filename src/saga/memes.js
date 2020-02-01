import { call, put, takeEvery, select } from 'redux-saga/effects';
import { GET_MEMES_REQUEST } from '../redux/memes';
import { getMemesSuccess, getMemesFailed } from '../redux/memes';
import axios from 'axios';
import { BASE_URL } from '../config';

function getMemes() {
  return axios.get(`${BASE_URL}/meme`);
}

function* getMemesRequest(action) {
  try {
    const response = yield call(getMemes);
    yield put(getMemesSuccess(response.data));
  } catch (e) {
    yield put(getMemesFailed());
  }
}

export function* memesSaga() {
  yield takeEvery(GET_MEMES_REQUEST, getMemesRequest);
}