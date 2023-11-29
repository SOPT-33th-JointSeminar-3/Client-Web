import CalContainer from "../components/calendar/CalContainer";
import CalFooter from "../components/calendar/CalFooter";
import CalHeader from "../components/calendar/CalHeader";
import styled from "styled-components";

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
  const CAL: calInfo[] = [
    {
      year: 2023,
      month: 12,
      start: 5,
      length: 31,
      holiday: [25],
      data: [
        { date: 5, price: 5.8 },
        { date: 7, price: 8 },
        { date: 11, price: 7.7 },
        { date: 15, price: 6.4 },
        { date: 20, price: 6 },
        { date: 21, price: 7.3 },
        { date: 23, price: 10.2 },
        { date: 29, price: 9 },
      ],
    },
    {
      year: 2024,
      month: 1,
      start: 1,
      length: 31,
      holiday: [1],
      data: [],
    },
    {
      year: 2024,
      month: 2,
      start: 4,
      length: 29,
      holiday: [9, 10],
      data: [],
    },
    {
      year: 2024,
      month: 3,
      start: 5,
      length: 31,
      holiday: [1],
      data: [],
    },
    {
      year: 2024,
      month: 4,
      start: 1,
      length: 30,
      holiday: [10],
      data: [],
    },
    {
      year: 2024,
      month: 5,
      start: 3,
      length: 31,
      holiday: [6, 15],
      data: [],
    },
    {
      year: 2024,
      month: 6,
      start: 1,
      length: 30,
      holiday: [1],
      data: [],
    },
    {
      year: 2024,
      month: 7,
      start: 1,
      length: 31,
      holiday: [1],
      data: [6],
    },
    {
      year: 2024,
      month: 4,
      start: 1,
      length: 31,
      holiday: [1],
      data: [15],
    },
    {
      year: 2024,
      month: 9,
      start: 0,
      length: 30,
      holiday: [16, 17, 18],
      data: [],
    },
    {
      year: 2024,
      month: 10,
      start: 2,
      length: 31,
      holiday: [3, 9],
      data: [],
    },
    {
      year: 2024,
      month: 11,
      start: 5,
      length: 30,
      holiday: [1],
      data: [],
    },
    {
      year: 2024,
      month: 12,
      start: 1,
      length: 31,
      holiday: [1],
      data: [],
    },
  ];
  return (
    <>
      <CalHeader />
      <CalWrapper>
        {CAL.map((cal, idx) => {
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
