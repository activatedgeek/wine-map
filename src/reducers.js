import { combineReducers } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';


const keplerGlReducerMod = keplerGlReducer.initialState({
  uiState: {
    currentModal: null,
  },
});


export default combineReducers({
  keplerGl: keplerGlReducerMod,
});
