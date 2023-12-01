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
    <>
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
