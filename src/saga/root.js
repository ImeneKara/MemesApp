import { all } from 'redux-saga/effects';
import { editorSaga } from '../saga/editor';
import { memesSaga } from '../saga/memes';
export default function* rootSaga() {
  yield all([
    editorSaga(),
   memesSaga()
  ]);
}