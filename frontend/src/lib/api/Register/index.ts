import { apiDefault } from '../client';
import { RegisterReq } from '../payloads/Register';

export const makeAccount = (data: RegisterReq) => {
  return apiDefault().post('/auth/register', {
    ...data,
    birth_year: parseInt(data.birth_year),
    birth_month: parseInt(data.birth_month),
    birth_day: parseInt(data.birth_day),
  });
};
