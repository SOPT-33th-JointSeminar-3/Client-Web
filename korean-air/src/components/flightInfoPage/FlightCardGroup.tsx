import { useState } from "react";
import FlightCard from "./FlightCard";
import styled from "styled-components";
import theme from "../../styles/theme";
import { FlightInfoItem } from "../../types/types";
import { FlightBtnFilter } from "../../assets";

export interface CardGroupProps {
  data: FlightInfoItem[];
  setSelectedPrice: React.Dispatch<React.SetStateAction<number>>;
}

export interface selectedSeatProps {
  flightId: number;
  seatId: number;
}

const FlightCardGroup: React.FC<CardGroupProps> = ({
  data,
  setSelectedPrice,
}) => {
  const [selectedSeat, setSelectedSeat] = useState<selectedSeatProps>({
    flightId: -1,
    seatId: -1,
  });

  return (
    <Wrapper>
      {data.map((flightData, idx) => {
        if (idx === 0) {
          return;
        } else {
          return (
            <FlightCard
              key={flightData.id}
              id={idx}
              flightData={flightData}
              selectedSeat={selectedSeat}
              setSelectedSeat={setSelectedSeat}
              setSelectedPrice={setSelectedPrice}
            />
          );
        }
      })}

      <FilterIcon>
        <FlightBtnFilter />
      </FilterIcon>
    </Wrapper>
  );
};

export default FlightCardGroup;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 2rem;
  margin-bottom: 11.4rem;

  background-color: ${({ theme }) => theme.colors.blue_5};
`;

const FilterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 13rem;
  right: 1.6rem;

  width: 4.6rem;
  height: 4.6rem;
  z-index: 3;
  border-radius: 2.3rem;
  background: ${theme.colors.skyBlue};
  box-shadow: 0rem 0rem 1rem 0rem rgba(107, 117, 136, 0.2);
`;
