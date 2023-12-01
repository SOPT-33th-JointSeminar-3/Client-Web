import { useState } from "react";
import FlightCard from "./FlightCard";
import styled from "styled-components";
import { FlightInfoItem } from "../../types/types";

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
    </Wrapper>
  );
};

export default FlightCardGroup;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  width: 100%;
  max-width: 43rem;
  padding: 2rem;
  margin-bottom: 11.4rem;

  background-color: ${({ theme }) => theme.colors.blue_5};
`;
