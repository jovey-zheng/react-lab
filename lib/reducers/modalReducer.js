import {MODAL_TYPE} from 'constants/actionTypes';

const initialState = {
  isOpen: false,
  data: {},
  modaltype: '',
};

export default function modalReducer(state = initialState, action) {
  if (action.type === MODAL_TYPE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return state;
}
