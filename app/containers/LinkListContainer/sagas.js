import { take, call, put, select } from 'redux-saga/effects';
import {takeLatest} from 'redux-saga';

import { SELECT_TOPIC } from "../NavigationContainer/constants";
import { requestLinksSucceded,requestLinksFailed} from "./actions";


export function fetchLinksFromServer(topic) {
  return fetch(`http://localhost:3000/api/topics/${topic.name}/links`)
    .then(response => response.json()); // take the response and parse json into an object

}

function* fetchLinks(action) {
  try {
    const links = yield call(fetchLinksFromServer, action.topic);
    console.info('Links from server : ', links);
    yield put(requestLinksSucceded(links));
  }
  catch (e) {
    yield put(requestLinksFailed(e.message));
  }
}

// Individual exports for testing
export function* fetchLinksSaga() {
  yield takeLatest(SELECT_TOPIC, fetchLinks);
}

// All sagas to be loaded
export default [
  fetchLinksSaga,
];
