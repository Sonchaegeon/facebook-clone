import styled from 'styled-components';
import {
  FriendsIconImage,
  GroupIconImage,
  HeaderIconImage,
  HomeIconImage,
} from '../../../assets/Main';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 10%);
  background-color: white;
`;

export const LogoIcon = styled.img.attrs({
  src: HeaderIconImage,
})`
  padding: 9px;
  width: 40px;
  height: 40px;
  margin-left: 6px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const HomeContainer = styled.li`
  margin-right: 10px;
`;

export const HomeButton = styled.button`
  width: 111.59px;
  height: 100%;
  background-color: white;
  border: none;
  border-bottom: 2px solid blue;
`;

export const HomeIcon = styled.img.attrs({
  src: HomeIconImage,
})`
  width: 30px;
  height: 30px;
`;

export const FriendsContainer = styled(HomeContainer)``;

export const FriendsButton = styled(HomeButton)``;

export const FriendsIcon = styled(HomeIcon).attrs({
  src: FriendsIconImage,
})`
  width: 50px;
  height: 50px;
`;

export const GroupContainer = styled(HomeContainer)``;

export const GroupButton = styled(HomeButton)``;

export const GroupIcon = styled(HomeIcon).attrs({
  src: GroupIconImage,
})``;
