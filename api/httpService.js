import axios from 'axios';
import {
  getPath,
  getCustomUrl,
  createUrlParamFromObj,
  getContentType,
  createHeader,
  GetLocal
} from '../utils';

export const apiInstance = axios.create({
  baseURL: '',
  timeout: 60000,
  validateStatus: status => status >= 200 && status < 300
});

class HttpServive {
  static request = async (method = 'GET', route = '', payload = {}, token) => {
    const userToken = GetLocal('api_token');
    const path = getPath(payload.path);
    const params = createUrlParamFromObj(payload.params);
    const customUrl = getCustomUrl(payload.url);
    const contentType = getContentType(payload.type);
    const baseHeaders = { 'Content-Type': contentType };
    if(token) {
      baseHeaders.Authorization = `bearer ${userToken || ''}`
    }
    const headers = createHeader(payload.headers, baseHeaders);
    const url = customUrl.length > 0 ? customUrl : route + path + params;
    const data = payload.body ? payload.body : {};
    const requestObj = { url, headers, method, data };

    try {
      const response = await apiInstance.request(requestObj);
      const responseData = response.data;
      if (responseData) {
        return { axiosResponse: response, data: [...responseData] };
      }
      return { axiosResponse: response, ...response };
    } catch (err) {
      if (err && err.response && err.response.data) {
        throw err.response.data;
      } else if (err && err.response) {
        throw err.response;
      } else {
        throw err;
      }
    }
  };

  static get = (route, token) => payload => this.request('GET', route, payload, token);

  static put = (route, token) => payload => this.request('PUT', route, payload, token);

  static post = (route, token) => payload => this.request('POST', route, payload, token);

  static delete = (route, token) => payload => this.request('DELETE', route, payload, token);

  static patch = (route, token) => payload => this.request('PATCH', route, payload, token);
}

export default HttpServive;