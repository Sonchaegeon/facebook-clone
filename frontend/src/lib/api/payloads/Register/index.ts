import { NumberLiteralType } from 'typescript';

export interface RegisterReq {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  birth_year: string;
  birth_month: string;
  birth_day: string;
  gender: string;
}
