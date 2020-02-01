import { call, put, takeEvery, select } from 'redux-saga/effects';
import {POST_MEME_REQUEST, POST_MEME_SUCCESS} from '../redux/editor';
import { postMemeSuccess, postMemeFailed } from '../redux/editor';
import axios from 'axios';
import { BASE_URL } from '../config';

function postMeme(author, title, image) {
  const formData = new FormData();
  formData.append('author', author);
  formData.append('title', title);
  formData.append('image', image);
  return axios.post(`${BASE_URL}/meme`, formData);
}

function* postMemeRequest(action) {
  const author = yield select(state => state.profile.username);
  const { title, image } = action.payload;
  try {
    yield call(postMeme, author, title, image);
    yield put(postMemeSuccess());
  } catch (e) {
    yield put(postMemeFailed());
  }
}

export function* editorSaga() {
  yield takeEvery(POST_MEME_REQUEST, postMemeRequest);
  yield takeEvery(POST_MEME_SUCCESS, () => window.location.href='/');
}