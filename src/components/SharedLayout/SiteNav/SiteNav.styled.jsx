import { Typography, styled, Box, Button } from '@mui/material';
import Icon from 'utils/Icon';

export const StyledContainer = styled(Box)`
  box-sizing: border-box;
  display: ${props => (props.data ? 'flex' : 'none')};
  width: 225px;
  min-height: 100%;
  z-index: 11;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    display: flex;
    padding: 32px 24px;
  }
`;

export const StyledBox = styled(Box)`
  z-index: 11;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const StyledHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 64px;
`;

export const StyleHeagerText = styled(Typography)`
  margin-left: 6px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.375;
  color: #3e85f3;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const StyledPicture = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 10px;
  }
`;

export const StyledButtonClose = styled(Button)`
  opacity: 1;
  width: 24px;
  height: 24px;
  margin-left: 6px;
  padding: 0;
  color: rgba(132, 130, 138, 1);
  background-color: transparent;
  &:hover,
  &:focus {
    color: rgba(62, 133, 243, 1);
    background-color: transparent;
  }
  @media screen and (min-width: 768px) {
    margin-left: 16px;
    width: 36px;
    height: 36px;
  }
  @media screen and (min-width: 1440px) {
    width: 20vw;
    opacity: 0;
  }
`;
export const StyledUser = styled(Typography)`
  color: rgba(52, 52, 52, 0.5);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const StyledLink = styled(Button)`
  fill: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  justify-content: start;

  padding: 16px 20px;
  border-radius: 8px;
  max-width: 145px;
  max-height: 40px;
  margin-bottom: 18px;
  color: #34343450;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.21;
  &:active {
    color: rgba(62, 133, 243, 1);
    background-color: #e3f3ff;
  }
  &:disabled {
    background-color: #e3f3ff;
    color: #3e85f3;
  }
  :hover,
  :focus {
    color: #3e85f3;
    background-color: #e3f3ff;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: rgba(62, 133, 243, 1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 16px;
    max-width: 215px;
    padding: 18px 20px;
  }
`;

export const UserNavTitle = styled(Typography)`
  box-sizing: border-box;
  font-size: 12px;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
  }
  &:hover {
    color: #3e85f3;
    background-color: #e3f3ff;
  }
`;

export const StyledButtonLogout = styled(Button)`
  z-index: 11;
  width: 131px;
  height: 46px;
  left: 20px;
  bottom: 24px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(255, 255, 255, 1);
  background: #3e85f3;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    width: 141px;
    height: 56px;
    left: 32px;
  }
`;
export const StyledIcon = styled(Icon)`
  @media screen and (min-width: 375px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
export const Overlay = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: transparent;
  z-index: 10;
`;
export const StyledLogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 6px;
`;
