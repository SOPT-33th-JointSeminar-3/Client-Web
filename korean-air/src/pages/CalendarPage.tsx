import CalContainer from "../components/calendar/CalContainer";
import CalFooter from "../components/calendar/CalFooter";
import CalHeader from "../components/calendar/CalHeader";
import styled from "styled-components";
import { CALENDAR_INFO } from "../constants/constant";
import { useState } from "react";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<string[]>([
    "가는 날",
    "오는 날",
  ]);
  const [isClicked, setClicked] = useState<number[]>([]);

  return (
    <>
      <CalHeader />
      <CalWrapper>
        {CALENDAR_INFO.map((cal, idx) => {
          return (
            <CalContainer
              key={idx}
              info={cal}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              isClicked={isClicked}
              setClicked={setClicked}
            />
          );
        })}
      </CalWrapper>
      <CalFooter selectedDate={selectedDate} />
    </>
  );
};

export default CalendarPage;

const CalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-bottom: 13rem;
`;
