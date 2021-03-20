import React, { FC } from 'react';
import * as S from '../../styles/Main';

const Main: FC = () => {
  return (
    <S.Background>
      <S.Wrapper>
        <S.Contents>
          <S.Logo />
          <S.StepTitle>
            Facebook에서 전세계에 있는 친구, 가족, 지인들과 이야기를 나눠보세요.
          </S.StepTitle>
        </S.Contents>
      </S.Wrapper>
    </S.Background>
  );
};

export default Main;
