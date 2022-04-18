import axios from "axios";
import { HOST_URL } from "../constants/env";

const api = axios.create();

export const apiGet = (baseUrl: string): Promise<any> => {
  return new Promise((resolve) => {
    api.get(`${HOST_URL}${baseUrl}`).then((result) => {
      resolve(result.data);
    });
  })
}

export const apiPost = (baseUrl: string, body: any): Promise<any> => {
  return api.post(`${HOST_URL}${baseUrl}`, body);
}

export const apiUpdate = (baseUrl: string, body: any, id: number): Promise<any> => {
  return api.put(`${HOST_URL}${baseUrl}/${id}`, body);
}

export const apiDelete = (baseUrl: string, id: number): Promise<any> => {
  return api.delete(`${HOST_URL}${baseUrl}/${id}`);
}