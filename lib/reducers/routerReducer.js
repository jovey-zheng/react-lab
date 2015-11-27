import {routerStateReducer} from 'redux-react-router';
import get from 'lodash/object/get';

export default function routerReducer(state = {}, action) {
  const nextState = routerStateReducer(state, action);
  if (nextState === state) {
    return state;
  } else {
    return {
      ...nextState,
      query: get(nextState, 'location.query'),
    };
  }
}
