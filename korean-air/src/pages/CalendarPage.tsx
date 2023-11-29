import CalContainer from "../components/calendar/CalContainer";
import CalFooter from "../components/calendar/CalFooter";
import CalHeader from "../components/calendar/CalHeader";
import styled from "styled-components";

const CalendarPage = () => {
  return (
    <>
      <CalHeader />
      <CalWrapper>
        <CalContainer />
        <CalContainer />
        <CalContainer />
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
`;
