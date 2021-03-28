import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { LoginReq } from '../../lib/api/payloads/Login';
import * as S from '../../styles/Main';
import * as loginApi from '../../lib/api/Login';
import Modal from '../common/Modal';

interface Props {
  modal: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

const Login: FC<Props> = ({ modal, handleCloseModal, handleOpenModal }) => {
  const [loginData, setLoginData] = useState<LoginReq>({
    email: '',
    password: '',
  });

  const changeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      const tokens = await loginApi.signIn(loginData);
      localStorage.setItem('access-token', tokens.data.access_token);
      localStorage.setItem('refresh-token', tokens.data.refresh_token);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }, [loginData]);

  return (
    <>
      {modal && <Modal handleCloseModal={handleCloseModal} />}
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
                <S.Form onSubmit={(e) => e.preventDefault()}>
                  <>
                    <S.InputFieldDiv>
                      <S.Input
                        type="text"
                        name="email"
                        id="emill"
                        placeholder="이메일 또는 전화번호"
                        value={loginData.email}
                        onChange={changeData}
                      />
                    </S.InputFieldDiv>
                    <S.InputFieldDiv>
                      <S.Input
                        type="password"
                        name="password"
                        id="pass"
                        placeholder="비밀번호"
                        value={loginData.password}
                        onChange={changeData}
                      />
                    </S.InputFieldDiv>
                  </>
                  <S.InputWrapper>
                    <S.InputSubmit
                      type="submit"
                      name="login"
                      onClick={submitHandler}
                    >
                      로그인
                    </S.InputSubmit>
                  </S.InputWrapper>
                  <S.LostPassWrapper>
                    <S.LostPass href="#">비밀번호를 잊으셨나요?</S.LostPass>
                  </S.LostPassWrapper>
                  <S.Whitespace />
                </S.Form>
                <S.InputWrapper>
                  <S.InputRegister onClick={handleOpenModal}>
                    새 계정 만들기
                  </S.InputRegister>
                </S.InputWrapper>
              </S.BoxWrapper>
            </S.Box>
          </S.FormWrapper>
        </S.Wrapper>
      </S.Background>
    </>
  );
};

export default Login;
