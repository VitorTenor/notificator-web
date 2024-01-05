import api from "@/config/axios";
import {AxiosResponse} from "axios";


export const get = async (url: string) : Promise<any> => {
  const response: AxiosResponse = await api.get(url);
  return response.data;
}

export const post = async (url: string, data: any) : Promise<any> => {
  const response: AxiosResponse = await api.post(url, data);
  return response.data;
}

export const put = async (url: string, data: any) : Promise<any> => {
  const response: AxiosResponse = await api.put(url, data);
  return response.data;
}


