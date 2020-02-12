import update from 'react-addons-update';
import * as ACTION_TYPES from '../constants/actionTypes';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING_START:
      return update(state, {
        loading: {
          $set: true,
        },
      });
    case ACTION_TYPES.LOADING_STOP:
      return update(state, {
        loading: {
          $set: false,
        },
      });
    default:
      return state;
  }
}