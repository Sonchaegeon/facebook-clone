import styled from 'styled-components';
import { LogoImage } from '../../assets/Main';

export const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
