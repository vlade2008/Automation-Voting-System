import * as ACTION_TYPES from '../constants/actionTypes';


export let start = value => {
    return dispatch => {
      dispatch(loadingStart(value));
    };
};

export let stop = value => {
    return dispatch => {
      dispatch(loadingStop(value));
    };
};


export let loadingStart = (data) => {
  return {
    type: ACTION_TYPES.LOADING_START,
    data
  };
};

export let loadingStop = (data) => {
  return {
    type: ACTION_TYPES.LOADING_STOP,
    data
  };
};