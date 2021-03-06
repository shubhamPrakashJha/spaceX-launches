import {actionTypes} from './launches.constant';

let initialState = {
  launchList: []
}

export const launchState = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LAUNCHES:
      return {
        ...state,
        launchList: action.payload
      }
  
    case actionTypes.FLUSH_LAUNCHES:
      return initialState;
  
    default:
      return state;
  }
}