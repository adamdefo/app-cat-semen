import axios, {CreateAxiosDefaults, AxiosInstance, AxiosResponse} from 'axios';
import { ENDPOINTS } from '../@utils/urls.ts';

const IP = 'http://localhost/';
const CONFIG: CreateAxiosDefaults = {
  // baseURL: IP + `/${PORT}/api`,
  baseURL: IP + `api/cat-semen`,
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  responseType: 'json',
};

const HTTP_METHOD = {
  get: 'get',
  post: 'post',
  delete: 'delete',
};

function createAxios<T = CreateAxiosDefaults>(extraConfig: T): AxiosInstance {
  return axios.create(extraConfig ? {...CONFIG, ...extraConfig} : CONFIG);
}

function createRequest<T = CreateAxiosDefaults>(extraConfig?: T): AxiosInstance {
  return createAxios(extraConfig);
} 

function http(endpoint: string, data: any = null, method: string = HTTP_METHOD.get, params?: any): Promise<AxiosResponse> {
  const request = createRequest();
  try {
    if (method === HTTP_METHOD.post) {
      return request.post(endpoint, data);
    }
    if (method === HTTP_METHOD.delete) {
      return request.delete(endpoint);
    }
    return request.get(endpoint, {params});
  } catch (error: any) {
    console.error(`Calling API is fail: ${error.message}`);
    throw error;
  }
}

export {
  ENDPOINTS,
  HTTP_METHOD,
  http
}
