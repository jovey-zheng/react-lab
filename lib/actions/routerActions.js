import {pushState} from 'redux-react-router';

export function updateQueries(payload = {}) {
  return (dispatch, getState) => {
    const {query, location} = getState().router;
    return dispatch(pushState(null, `${location.pathname}`, {
      ...query,
      ...payload,
    }));
  };
}

