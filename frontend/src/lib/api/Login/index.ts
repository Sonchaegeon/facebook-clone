import { apiDefault } from '../client';
import { LoginReq } from '../payloads/Login';

export const signIn = (data: LoginReq) => {
  return apiDefault().post('/auth/login', {
    ...data,
  });
};
