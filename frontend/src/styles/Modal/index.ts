import styled from 'styled-components';
import { CloseButtonImage } from '../../assets/common/Modal';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 18%;
  text-align: center;
  vertical-align: middle;
  width: 100%;
`;

export const ModalBox = styled.div`
  display: inline-block;
  margin: 20px;
  position: relative;
  text-align: left;
`;

export const ModalDiv = styled.div`
  background-color: transparent;
  overflow: visible;
  padding: 0;
  width: 423px;
`;

export const CloseButton = styled.img.attrs({
  src: CloseButtonImage,
})`
  position: absolute;
  right: 10px;
  top: 12px;
  z-index: 3;
  border: 0;
`;

export const FormHeaderWrapper = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  margin-top: 0;
  padding-top: 10px;
  align-items: center;
  border-radius: 8px 8px 0 0;
  box-sizing: border-box;
  padding: 10px 16px;
  position: relative;
  width: 432px;
  z-index: 2;
`;

export const FormHeaderTitle = styled.div`
  color: #1c1e21;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0;
  font-weight: 600;
`;

export const FormHeaderSubtitle = styled.div`
  margin-bottom: 0;
  color: #606770;
  font-size: 15px;
  line-height: 24px;
  font-weight: normal;
`;

export const FormWrapper = styled.div`
  background-color: white;
  border-top: 1px solid #dadde1;
  box-sizing: border-box;
  padding: 13px;
  position: relative;
  width: 432px;
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  z-index: 2;
`;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  background: white;
  border-radius: 5px;
  width: 399px;
  display: inline-block;
  position: relative;
  background: #f5f6f7;
  margin-top: 10px;
`;

export const SmallInputWrapper = styled(InputWrapper)`
  width: 194px;
  & + & {
    margin: 0 0 0 12px;
  }
`;

export const Input = styled.input`
  width: 375px;
  font-size: 15px;
  line-height: 16px;
  padding: 12px;
  background: transparent;
  border-radius: 5px;
  margin: 0;
  border: 1px solid #ccd0d5;
`;

export const SmallInput = styled(Input)`
  width: 170px;
  padding: 11px;
`;

export const BirthInputWrapper = styled.div`
  position: relative;
`;

export const InputTitle = styled.div`
  color: #606770;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 0;
  margin-top: 8px;
`;

export const BirchSelect = styled.select`
  border-radius: 4px;
  font-size: 15px;
  font-weight: normal;
  height: 36px;
  line-height: 20px;
  background-image: url('../../assets/common/Modal/DownArrow.png');
  background-position: right 5px center;
  background-repeat: no-repeat;
  background-size: 14px;
  padding: 0 8px;
  padding-right: 20px;
  width: 125px;
  border: 1px solid #ccd0d5;
  margin: 4px;
`;

export const GenderWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  margin: -8px -6px -6px;
  width: 411px;
`;

export const GenderSpan = styled.span`
  border: 1px solid #ccd0d5;
  box-sizing: border-box;
  display: inline-block;
  flex: 1 0 auto;
  font-weight: normal;
  height: 36px;
  margin: 8px 6px 6px;
  padding: 0;
  position: relative;
  width: auto;
`;

export const GenderLabel = styled.label`
  box-sizing: border-box;
  display: inline-block;
  font-size: 15px;
  line-height: 36px;
  padding: 0 28px 0 10px;
  width: 185px;
`;

export const GenderRadio = styled.input`
  height: 36px;
  margin: 0;
  position: absolute;
  right: 10px;
  top: 0;
`;

export const SubmitWrapper = styled.div`
  text-align: center;
`;

export const SubmitButton = styled.button`
  font-weight: bold;
  background-color: #00a400;
  border: none;
  border-radius: 6px;
  box-shadow: none;
  color: white;
  font-size: 18px;
  height: 36px;
  padding: 0 32px;
  text-shadow: none;
  cursor: pointer;
  letter-spacing: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 194px;
  text-align: center;
`;
