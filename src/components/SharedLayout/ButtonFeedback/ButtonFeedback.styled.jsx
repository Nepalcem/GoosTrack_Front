import styled from 'styled-components';

export const Button = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 10px;
  font-family: Inter;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 600;
  color: #ffffff;
  background-color: #3e85f3;
  &:hover {
    cursor: pointer;
    box-shadow:rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (min-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 14px;
    line-height: 1.29;
  }
`;
