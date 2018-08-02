/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS_FAILED,
  REQUEST_LINKS_SUCCEDED
} from './constants';

export function requestLinksSucceded(links) {
  return {
    type: REQUEST_LINKS_SUCCEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_SUCCEDED,
    message,
  };
}

