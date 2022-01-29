import axios, {Method} from 'axios';
import {API_URL} from './settings';
import storage from "./storage";


const request = (method: Method, command: string, data: any, token: string | null, upload = false)=> {
  const token_object = token
    ? {
      Authorization: `Bearer ${token}`,
    }
    : '';
  return axios.request({
    method,
    url: `${API_URL}/${command}`,
    [method === 'get' ? 'params' : 'data']: data,
    headers: {
      ...token_object,
      Accept: 'application/json',
      'Content-Type':
        method === 'get' || !upload
          ? 'application/json'
          : 'multipart/form-data',
    },
  });
};

export default {
  get: async (command: string, data: any) => {
    const response = await request('get', command, data, storage.get('token'));
    console.log(response);
    return response.data;
  },
  post: async (command: string, data = {}) => {
    const response = await request('post', command, data, storage.get('token'));
    console.log(response.data);
    return response.data;
  },
  upload: async (command: string, data: any = {}) => {
    const formData = new FormData();
    Object.keys(data).map((v) => {
      formData.append(v, data[v]);
    });
    const response = await request(
      'post',
      command,
      formData,
      storage.get('token'),
      true,
    );
    return response.data;
  },
};
