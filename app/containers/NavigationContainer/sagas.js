import { call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/';
import { REQUEST_TOPICS} from "./constants";
import { requestTopicsSucceeded,requestTopicsFailed } from "./actions";

export function fetchTopicsFromServer() {
  return fetch('http://localhost:3000/api/topics').
    then(response => response.json());

}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    console.info('Topics_ from server : ', topics);
    yield put(requestTopicsSucceeded(topics));
  }
  catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchTopicSaga() {
  yield takeLatest( REQUEST_TOPICS, fetchTopics);
}

// All sagas to be loaded
export default [
  fetchTopicSaga,
];
