/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDED,
  SELECT_TOPIC
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: ' description1'
    },
    {
      name: 'apps',
      description: ' description2'
    },
    {
      name: 'news',
      description: ' description3'
    },
    {
      name: 'news2',
      description: ' description4'
    },

  ]
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDED: {
      return state.set('topics', action.topics);   // immutableJS call
    }
    case SELECT_TOPIC:
      return state.set('selectedTopic', action.topic);   // immutableJS call
    default:
      return state;
  }
}

export default navigationContainerReducer;
