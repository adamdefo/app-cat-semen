import axios, {CreateAxiosDefaults, AxiosInstance, AxiosResponse} from 'axios';
import {API_URL} from './../@utils/constants';

const IP = API_URL;
const PORT = ':80';
export const CONFIG: CreateAxiosDefaults = {
  // baseURL: IP + `/${PORT}/api`,
  baseURL: IP + `api-shop`,
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  responseType: 'json',
};

export const HTTP_METHOD = {
  get: 'get',
  post: 'post',
  delete: 'delete',
}

export function createAxios<T = CreateAxiosDefaults>(extraConfig: T): AxiosInstance {
  return axios.create(extraConfig ? {...CONFIG, ...extraConfig} : CONFIG);
}

export function createRequest<T = CreateAxiosDefaults>(extraConfig?: T): AxiosInstance {
  return createAxios(extraConfig);
} 

export function http(endpoint: string, data: any, method: string = HTTP_METHOD.get, params?: any): Promise<AxiosResponse> {
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