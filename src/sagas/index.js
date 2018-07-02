import { take, fork } from 'redux-saga/effects';
import * as asl from '../actions/ASL.js';

function* WatchASL() {
    while (true) {
      yield take(asl.ASL_LEFT);
    }
}

export default function* rootSaga() {
    yield fork(WatchASL);
  }