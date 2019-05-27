import { combineReducers } from 'redux';
import keplerGlReducer from 'kepler.gl/reducers';


export default combineReducers({
  keplerGl: keplerGlReducer,
});
