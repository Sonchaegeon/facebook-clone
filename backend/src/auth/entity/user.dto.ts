import { IsEmail, IsEnum, IsNumber, IsString, Length } from 'class-validator';
import { Gender } from './user.entity';

export class SignUpUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(6)
  password: string;

  @IsString()
  lastname: string;

  @IsString()
  firstname: string;

  @IsNumber()
  birth_year: number;

  @IsNumber()
  birth_month: number;

  @IsNumber()
  birth_day: number;

  @IsEnum(Gender)
  gender: Gender;
}
