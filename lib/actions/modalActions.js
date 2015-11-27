import {MODAL_TYPE} from 'constants/actionTypes';

export function switchModal(payload) {
  return {
    type: MODAL_TYPE,
    payload: payload,
  };
}
