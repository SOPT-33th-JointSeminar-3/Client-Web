import { useState } from "react";
import FlightCard from "./FlightCard";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FlightInfoItem } from "../../types/types";

interface CardGroupProps {
  data: FlightInfoItem[];
}

// TODO 왜 여기서
// interface CardGroupProps {
//   data: FlightInfoData;
// }
// 이렇게 하면 배열이 아니라고 오류가 뜨지? 두 가지 다 배열 아닌가?
// 챌린징 요소에 적어 놓음.

const FlightCardGroup: React.FC<CardGroupProps> = ({ data }) => {
  return (
    <>
      {data.map((flightData, idx) => {
        if (idx === 0) {
          return;
        } else {
          return <FlightCard key={flightData.id} flightData={flightData} />;
        }
      })}
    </>
    // <>
    //   <FlightCard
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <FlightCard
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <FlightCard
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <LowestContainer
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <FlightCard
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <LowestContainer
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <FlightCard
    //     click={click}
    //     setClick={setClick}
    //     handleBtnClick={handleBtnClick}
    //   />
    //   <FilterIcon>
    //     <FlightBtnFilter />
    //   </FilterIcon>
    //   ;
    // </>
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
