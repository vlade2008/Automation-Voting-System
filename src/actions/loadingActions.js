import * as ACTION_TYPES from '../constants/actionTypes';


export let start = value => {
    return dispatch => {
      dispatch(loadingStart(value)); // execute line 17
    };
};

export let stop = value => {
    return dispatch => {
      dispatch(loadingStop(value));
    };
};


export let loadingStart = (data) => { // execute file reducer/app line 9 checking the type.
  return {
    type: ACTION_TYPES.LOADING_START, // on liine 9 checking the type.
    data // pass on file reducer/app line 13
  };
};

export let loadingStop = (data) => {
  return {
    type: ACTION_TYPES.LOADING_STOP,
    data
  };
};