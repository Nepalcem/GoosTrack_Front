import styled from 'styled-components';

export const CalendarTableDiv = styled.table`
  height: 85%;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15px;
  }
`;
export const CalendarRow = styled.tr`
  display: flex;
  flex: 1;
`;

export const CalendarCellWrap = styled.div`
  padding: 0;
  flex: 1;
`;

export const CalenderCell = styled.td`
  border: 1px solid rgba(220, 227, 229, 0.5);
  position: relative;

  // height: 100%;
  :hover {
    background-color: #7c6969;
  }

  @media screen and (min-width: 375px) {
    width: 47px;
    height: 106px;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 144px;
  }
  @media screen and (min-width: 1440px) {
    width: 156px;
    height: 125px;
  }
`;

export const NumberDay = styled.div`
  position: absolute;

  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  color: #343434;
  @media screen and (min-width: 375px) {
    top: 12px;
    right: 10px;
  }
  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;

    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;