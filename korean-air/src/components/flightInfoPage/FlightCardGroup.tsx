import { useState } from "react";
import FlightCard from "./FlightCard";
import LowestContainer from "./LowestContainer";
import { FlightBtnFilter } from "../../assets";
import styled from "styled-components";
import theme from "../../styles/theme";

const FlightCardGroup = () => {
  const [click, setClick] = useState<boolean>(false);

  function handleBtnClick() {
    console.log("클릭!!");
    setClick(!click);
    console.log(!click);
  }

  return (
    <>
      <FlightCard
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <FlightCard
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <FlightCard
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <LowestContainer
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <FlightCard
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <LowestContainer
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <FlightCard
        click={click}
        setClick={setClick}
        handleBtnClick={handleBtnClick}
      />
      <FilterIcon>
        <FlightBtnFilter />
      </FilterIcon>
      ;
    </>
  );
};

export default FlightCardGroup;

const FilterIcon = styled.div`
  display: flex;
  position: fixed;
  width: 4.6rem;
  height: 4.6rem;
  margin-left: 33.3rem;
  margin-top: 20rem;
  z-index: 1;
  justify-content: center;
  align-items: center;
  float: right;
  flex-shrink: 0;
  border-radius: 5.5rem;
  background: ${theme.colors.skyBlue};
  box-shadow: 0rem 0rem 1rem 0rem rgba(107, 117, 136, 0.2);
`;
