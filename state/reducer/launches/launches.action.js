import {actionTypes} from './launches.constant';

export const getLaunches = payload => ({
  type: actionTypes.GET_LAUNCHES,
  payload
})

export const getLaunches = () => ({
  type: actionTypes.FLUSH_LAUNCHES,
})