import CalContainer from "../components/calendar/CalContainer";
import CalFooter from "../components/calendar/CalFooter";
import CalHeader from "../components/calendar/CalHeader";
import styled from "styled-components";
import { CALENDAR_INFO } from "../constants/constant";

export interface calInfo {
  year: number;
  month: number;
  start: number;
  length: number;
  holiday: number[];
  data: {
    date: number;
    price: number;
  }[];
}

const CalendarPage = () => {
  // start : 금요일부터 1일이 시작되는 달
  // length : 총 31일인 달
  // holiday : 휴일(빨간날)인 날
  // data : 항공편 정보가 있는 날
  return (
    <>
      <CalHeader />
      <CalWrapper>
        {CALENDAR_INFO.map((cal, idx) => {
          return <CalContainer key={idx} info={cal} />;
        })}
      </CalWrapper>
      <CalFooter />
    </>
  );
};

export default CalendarPage;

const CalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-bottom: 16rem;
`;
