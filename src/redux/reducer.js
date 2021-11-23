import {combineReducers} from 'redux';

const initialStateTrack = {
  topTrack: {},
};

const TrackReducer = (state = initialStateTrack, action) => {
  if (action.type === 'FILL_TRACK') {
    return {
      ...state,
      ['topTrack']: action.inputValue,
    };
  }
  return state;
};

const initialStateLirik = {
  data: {},
};

const LirikReducer = (state = initialStateLirik, action) => {
  if (action.type === 'FILL_LIRIK') {
    return {
      ...state,
      ['data']: action.inputValue,
    };
  }
  return state;
};

const reducer = combineReducers({
  TrackReducer,
  LirikReducer,
});

export default reducer;
