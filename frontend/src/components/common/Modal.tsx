import React, { FC } from 'react';
import {
  setDayDate,
  setMonthDate,
  setYearDate,
} from '../../lib/utils/function';
import * as S from '../../styles/Modal';

const Modal: FC = () => {
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
                  <S.Form>
                    <S.SmallInputWrapper>
                      <S.SmallInput name="lastname" placeholder="성(姓)" />
                    </S.SmallInputWrapper>
                    <S.SmallInputWrapper>
                      <S.SmallInput
                        type="text"
                        name="fistname"
                        placeholder="이름(성은 제외)"
                      />
                    </S.SmallInputWrapper>
                    <S.InputWrapper>
                      <S.Input
                        type="text"
                        name="email"
                        placeholder="휴대폰 번호 또는 이메일"
                      />
                    </S.InputWrapper>
                    <S.InputWrapper>
                      <S.Input
                        type="password"
                        name="password"
                        placeholder="새 비밀번호"
                      />
                    </S.InputWrapper>
                    <S.BirthInputWrapper>
                      <S.InputTitle>생일</S.InputTitle>
                      <S.BirchSelect
                        name="birthday_year"
                        id="year"
                        title="연도"
                      >
                        {setYearDate()}
                      </S.BirchSelect>
                      <S.BirchSelect
                        name="birthday_month"
                        id="month"
                        title="월"
                      >
                        {setMonthDate()}
                      </S.BirchSelect>
                      <S.BirchSelect name="birthday_day" id="day" title="일">
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
                        value="1"
                        name="gender"
                      />
                    </S.GenderSpan>
                    <S.GenderSpan>
                      <S.GenderLabel htmlFor="gender_male">남자</S.GenderLabel>
                      <S.GenderRadio
                        type="radio"
                        id="gender_male"
                        value="2"
                        name="gender"
                      />
                    </S.GenderSpan>
                    <S.SubmitWrapper>
                      <S.SubmitButton>가입하기</S.SubmitButton>
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
