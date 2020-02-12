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
          $set: action.data, //  action.data  is (true,false) value
        },
      });
    case ACTION_TYPES.LOADING_STOP:
      return update(state, {
        loading: {
          $set: action.data, //  action.data  is (true,false) value
        },
      });
    default:
      return state;
  }
}