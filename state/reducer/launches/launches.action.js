import {actionTypes} from './launches.constant';
import {API} from '../../../api'

export const getLaunches = payload => ({
  type: actionTypes.GET_LAUNCHES,
  payload
})

export const flushLaunches = () => ({
  type: actionTypes.FLUSH_LAUNCHES,
})

export const getLaunchesAsync = (payload) => {
  return async (dispatch, getState) => {
    try {
      let launcData = await API.getLaunchList(payload);
      // console.log(launcData)
      dispatch(getLaunches(launcData.data))
    } catch (error) {
      console.log(error)
    }
  }
}