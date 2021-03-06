import baseUrl from './url';
import HttpServive from './httpService';

const API = {};

// example: no need api_token
API.getLaunchList = HttpServive.get(baseUrl.getLaunchList);

export {
  API
};
