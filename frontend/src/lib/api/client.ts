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
      const { code, message } = getAxiosError(err);

      if (code === 400) {
        alert('요청이 잘못되었습니다 \n' + message);
      } else if (code === 401) {
        alert('아이디 또는 비밀번호를 확인해주세요 \n' + message);
      } else {
        alert(code);
      }

      return Promise.reject(err);
    }
  );

  return instance;
};
