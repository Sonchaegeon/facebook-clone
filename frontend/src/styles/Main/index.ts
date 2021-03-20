import styled from 'styled-components';
import { LogoImage } from '../../assets/Main';

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Logo = styled.img.attrs({
  src: LogoImage,
})`
  padding: 112px 0 16px;
  height: 107px;
  margin: -29px;
`;

export const Contents = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  width: 980px;
  display: block;
  line-height: 1.34;
`;

export const Wrapper = styled.div`
  padding-top: 112px;
  margin: 0 240px;
`;

export const StepTitle = styled.h2`
  color: black;
  font-size: 28px;
  font-weight: normal;
  width: 500px;
  padding: 0 0 20px;
`;

export const FormWrapper = styled.div`
  float: right;
  display: inline-block;
  vertical-align: top;
  position: relative;
  bottom: 280px;
`;

export const Box = styled.div`
  height: 456px;
  width: 396px;
  display: block;
`;

export const BoxWrapper = styled.div`
  padding-bottom: 24px;
  padding-top: 10px;
  align-items: center;
  background-color: white;
  border: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  margin: 40px 0 0;
  padding: 20px 0 20px;
  width: 396px;
  text-align: center;
  border-radius: 6px;
`;

export const Form = styled.form``;

export const InputFieldDiv = styled.div`
  font-size: 17px;
  width: 364px;
  display: inline-block;
  margin: auto;
  padding: 6px 0;
`;

export const Input = styled.input`
  padding: 14px 16px;
  width: 330px;
  border: 1px solid #dddfe2;
  color: #1d2129;
  height: 22px;
  line-height: 16px;
  vertical-align: center;
  cursor: text;
  border-radius: 6px;
`;

export const InputWrapper = styled.div`
  padding-top: 6px;
`;

export const InputSubmit = styled.button`
  background-color: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: 332px;
  cursor: pointer;
  color: white;
  box-sizing: content-box;
  font-weight: bold;
`;

export const LostPassWrapper = styled.div`
  margin-top: 16px;
`;

export const LostPass = styled.a`
  color: #1877f2;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
`;

export const Whitespace = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;

export const InputRegister = styled.a`
  border: none;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background-color: #42b72a;
  color: white;
  box-sizing: content-box;
  font-weight: bold;
  justify-content: center;
  position: relative;
  text-align: center;
  text-shadow: none;
  vertical-align: middle;
`;
