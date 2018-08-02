/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEDED
} from './constants';

const initialState = fromJS({
  links: [{
    description: '1',
    url: '2',
    topicName: '3',
    id: '4',
  }],
});

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEDED:
      return state.set('links',action.links);
    default:
      return state;
  }
}

export default linkListContainerReducer;
