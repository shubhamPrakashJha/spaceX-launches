import {getYearsList} from '../utils'

export function filterConfig(fromYear) {
  return [
    {
      title: 'Launch Year',
      key: 'launch_year',
      values: getYearsList(fromYear),
    },
    {
      title: 'Successful Launch',
      key: 'launch_success',
      values: ['true', 'false'],
    },
    {
      title: 'Successful Landing',
      key: 'land_success',
      values: ['true', 'false'],
    },
  ];
}
