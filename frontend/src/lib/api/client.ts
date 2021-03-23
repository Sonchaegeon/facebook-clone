import axios from 'axios';
import { getAxiosError } from '../utils/function';

export const SERVER = {
  hostUrl: process.env.REACT_APP_HOST_URL,
};

export const apiDefault = () => {
  const instance = axios.create({
    baseURL: SERVER.hostUrl,
  });

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      const { status } = getAxiosError(err);

      if (status === 400) {
        alert('요청이 잘못되었습니다.');
      } else {
        alert(status);
      }

      return Promise.reject(err);
    }
  );

  return instance;
};
