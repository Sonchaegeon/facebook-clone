import React, { FC } from 'react';
import * as S from '../../styles/Main/Header';
const Header: FC = () => {
  return (
    <S.NavContainer>
      <S.LogoIcon />
      <S.Ul>
        <S.HomeContainer>
          <S.HomeButton>
            <S.HomeIcon />
          </S.HomeButton>
        </S.HomeContainer>
        <S.FriendsContainer>
          <S.FriendsButton>
            <S.FriendsIcon />
          </S.FriendsButton>
        </S.FriendsContainer>
        <S.GroupContainer>
          <S.GroupButton>
            <S.GroupIcon />
          </S.GroupButton>
        </S.GroupContainer>
      </S.Ul>
    </S.NavContainer>
  );
};
export default Header;
