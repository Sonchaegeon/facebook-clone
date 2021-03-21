import React, { FC } from 'react';
import * as S from '../../styles/Main';
import Modal from '../common/Modal';

const Main: FC = () => {
  return (
    <>
      <Modal />
      <S.Background>
        <S.Wrapper>
          <S.Contents>
            <S.Logo />
            <S.StepTitle>
              Facebook에서 전세계에 있는 친구, 가족, 지인들과 이야기를
              나눠보세요.
            </S.StepTitle>
          </S.Contents>
          <S.FormWrapper>
            <S.Box>
              <S.BoxWrapper>
                <S.Form>
                  <>
                    <S.InputFieldDiv>
                      <S.Input
                        type="text"
                        name="email"
                        id="emill"
                        placeholder="이메일 또는 전화번호"
                      />
                    </S.InputFieldDiv>
                    <S.InputFieldDiv>
                      <S.Input
                        type="password"
                        name="pass"
                        id="pass"
                        placeholder="비밀번호"
                      />
                    </S.InputFieldDiv>
                  </>
                  <S.InputWrapper>
                    <S.InputSubmit type="submit" name="login">
                      로그인
                    </S.InputSubmit>
                  </S.InputWrapper>
                  <S.LostPassWrapper>
                    <S.LostPass href="#">비밀번호를 잊으셨나요?</S.LostPass>
                  </S.LostPassWrapper>
                  <S.Whitespace />
                  <S.InputWrapper>
                    <S.InputRegister href="#" role="button">
                      새 계정 만들기
                    </S.InputRegister>
                  </S.InputWrapper>
                </S.Form>
              </S.BoxWrapper>
            </S.Box>
          </S.FormWrapper>
        </S.Wrapper>
      </S.Background>
    </>
  );
};

export default Main;
