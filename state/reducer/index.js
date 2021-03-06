import { combineReducers } from 'redux';
import {launchState} from './launches/launches.reducer';


export const rootReducer = combineReducers({
  launchState
})
