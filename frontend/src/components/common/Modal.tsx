import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { RegisterReq } from '../../lib/api/payloads/Register';
import {
  getAxiosError,
  setDayDate,
  setMonthDate,
  setYearDate,
} from '../../lib/utils/function';
import * as S from '../../styles/Modal';
import * as registerApi from '../../lib/api/Register';

const Modal: FC = () => {
  const [registerData, setRegisterData] = useState<RegisterReq>({
    email: '',
    password: '',
    lastname: '',
    firstname: '',
    birth_year: '',
    birth_day: '',
    birth_month: '',
    gender: '',
  });

  const changeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const selectData = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      console.log(registerData);
      await registerApi.makeAccount(registerData);
    } catch (err) {
      console.log(err);
    }
  }, [registerData]);

  return (
    <>
      <S.ModalBackground>
        <S.ModalWrapper>
          <S.ModalBox>
            <S.ModalDiv>
              <S.CloseButton
                width="24px"
                height="24px"
                aspect-ratio="auto 24 / 24"
              />
              <S.FormHeaderWrapper>
                <S.FormHeaderTitle>가입하기</S.FormHeaderTitle>
                <S.FormHeaderSubtitle>빠르고 쉽습니다.</S.FormHeaderSubtitle>
              </S.FormHeaderWrapper>
              <>
                <S.FormWrapper>
                  <S.Form onSubmit={(e) => e.preventDefault()}>
                    <S.SmallInputWrapper>
                      <S.SmallInput
                        name="lastname"
                        placeholder="성(姓)"
                        value={registerData.lastname}
                        onChange={changeData}
                      />
                    </S.SmallInputWrapper>
                    <S.SmallInputWrapper>
                      <S.SmallInput
                        type="text"
                        name="firstname"
                        placeholder="이름(성은 제외)"
                        value={registerData.firstname}
                        onChange={changeData}
                      />
                    </S.SmallInputWrapper>
                    <S.InputWrapper>
                      <S.Input
                        type="text"
                        name="email"
                        placeholder="휴대폰 번호 또는 이메일"
                        value={registerData.email}
                        onChange={changeData}
                      />
                    </S.InputWrapper>
                    <S.InputWrapper>
                      <S.Input
                        type="password"
                        name="password"
                        placeholder="새 비밀번호"
                        value={registerData.password}
                        onChange={changeData}
                      />
                    </S.InputWrapper>
                    <S.BirthInputWrapper>
                      <S.InputTitle>생일</S.InputTitle>
                      <S.BirchSelect
                        name="birth_year"
                        id="year"
                        title="연도"
                        value={registerData.birth_year}
                        onChange={selectData}
                      >
                        {setYearDate()}
                      </S.BirchSelect>
                      <S.BirchSelect
                        name="birth_month"
                        id="month"
                        title="월"
                        value={registerData.birth_month}
                        onChange={selectData}
                      >
                        {setMonthDate()}
                      </S.BirchSelect>
                      <S.BirchSelect
                        name="birth_day"
                        id="day"
                        title="일"
                        value={registerData.birth_day}
                        onChange={selectData}
                      >
                        {setDayDate()}
                      </S.BirchSelect>
                    </S.BirthInputWrapper>
                    <S.InputTitle>성별</S.InputTitle>
                    <S.GenderSpan>
                      <S.GenderLabel htmlFor="gender_female">
                        여자
                      </S.GenderLabel>
                      <S.GenderRadio
                        type="radio"
                        id="gender_female"
                        value="F"
                        name="gender"
                        onChange={changeData}
                      />
                    </S.GenderSpan>
                    <S.GenderSpan>
                      <S.GenderLabel htmlFor="gender_male">남자</S.GenderLabel>
                      <S.GenderRadio
                        type="radio"
                        id="gender_male"
                        value="M"
                        name="gender"
                        onChange={changeData}
                      />
                    </S.GenderSpan>
                    <S.SubmitWrapper>
                      <S.SubmitButton onClick={submitHandler}>
                        가입하기
                      </S.SubmitButton>
                    </S.SubmitWrapper>
                  </S.Form>
                </S.FormWrapper>
              </>
            </S.ModalDiv>
          </S.ModalBox>
        </S.ModalWrapper>
      </S.ModalBackground>
    </>
  );
};

export default Modal;
