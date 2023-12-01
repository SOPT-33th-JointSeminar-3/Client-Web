import styled from "styled-components";
import theme from "../../styles/theme";
import {
  ChevronRight,
  IcChangeFlight,
  IcConditionArrow,
  IcRefundFlight,
  IcShortInfoFlight,
  LogoJinair,
} from "../../assets";
import { FlightInfoItem } from "../../types/types";
import { selectedSeatProps } from "./FlightCardGroup";

export interface FlightCardProp {
  id: number;
  flightData: FlightInfoItem;
  selectedSeat: selectedSeatProps;
  setSelectedSeat: React.Dispatch<React.SetStateAction<selectedSeatProps>>;
  setSelectedPrice: React.Dispatch<React.SetStateAction<number>>;
}

const FlightCard: React.FC<FlightCardProp> = ({
  id,
  flightData,
  selectedSeat,
  setSelectedSeat,
  setSelectedPrice,
}) => {
  const flightTime = flightData.durationTime.replace(":", "시간 "); //공백 일부러 준거임

  function handleBtnClick(idx: number) {
    setSelectedSeat({ flightId: id, seatId: idx });

    const selectedPrice = flightData.seats[idx].price;
    setSelectedPrice(selectedPrice);
  }

  return (
    <Wrapper>
      <TimeContainer>
        <TimeLayout>
          <FlightTime>{flightData.startTime}</FlightTime>
          <Area>SEL</Area>
        </TimeLayout>
        <ExpectedTimeLayout>
          <Time>{flightTime}분</Time>
          <IcConditionArrow />
        </ExpectedTimeLayout>
        <TimeLayout>
          <FlightTime>{flightData.endTime}</FlightTime>
          <Area>CJU</Area>
        </TimeLayout>
        <ChevronRight />
      </TimeContainer>
      <section>
        <JinairInfo>
          KE5153 <LogoJinair /> 진에어 운항
        </JinairInfo>
      </section>
      <BtnContainer>
        {flightData.seats.map((seatData, idx) => (
          <BtnLayout
            key={seatData.seatId}
            onClick={() => handleBtnClick(idx)}
            className={`${
              selectedSeat.flightId === id && selectedSeat.seatId === idx
                ? "click"
                : ""
            }`}
          >
            <CommonTitle
              className={`${
                selectedSeat.flightId === id && selectedSeat.seatId === idx
                  ? "click"
                  : ""
              }`}
            >
              {seatData.seatClass}
            </CommonTitle>
            <CommonPrice
              className={`${
                selectedSeat.flightId === id && selectedSeat.seatId === idx
                  ? "click"
                  : ""
              }`}
            >
              {" "}
              {seatData.price.toLocaleString()}
            </CommonPrice>
            <CommonSeat
              className={`${
                selectedSeat.flightId === id && selectedSeat.seatId === idx
                  ? "click"
                  : ""
              }`}
            >
              7석
            </CommonSeat>
          </BtnLayout>
        ))}
      </BtnContainer>
      {/* 특가운임 || 할인운임 || 정산운임 클릭 시 출력되는 곳 */}
      <ClickSection>
        <div>
          <TextContainer>
            <IcChangeFlight />
            <CommonSeat>변경 불가</CommonSeat>
          </TextContainer>
          <TextContainer>
            <IcRefundFlight />
            <CommonSeat>환불 7,000원</CommonSeat>
          </TextContainer>
        </div>
        <div>
          <TextContainer>
            <IcShortInfoFlight />
            <CommonSeat>좌석 승급 불가/ (결제 페이지에서 확인 가능)</CommonSeat>
          </TextContainer>
        </div>
      </ClickSection>
    </Wrapper>
  );
};

export default FlightCard;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background: ${theme.colors.white};
  box-shadow: 0rem 0rem 2rem 0rem rgba(107, 117, 136, 0.2);
  border-radius: 1rem;

  & > section {
    margin-left: 2rem;
  }
`;
const TimeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 2rem;
  flex-shrink: 0;
  overflow: scroll;

  & > svg {
    position: absolute;
    right: 3rem;
  }
`;
const TimeLayout = styled.div`
  display: flex;
  width: 5.6rem;
  height: 4.4rem;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  flex-shrink: 0;
`;

const FlightTime = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.title_bold_18};
`;

const Area = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};
`;

const ExpectedTimeLayout = styled.article`
  display: inline-block;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Time = styled.p`
  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
  margin-left: 2rem;
`;

const JinairInfo = styled.p`
  color: ${theme.colors.grey_2};
  ${theme.fonts.body_medium_12};
`;

const BtnContainer = styled.div`
  display: flex;
  width: 100%;

  margin-top: 0.6rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const BtnLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  position: relative;

  width: 8.3rem;
  height: 8.3rem;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 1rem;
  border: 0.1rem solid ${theme.colors.grey_4};
  background: ${theme.colors.white};

  &.click {
    background: ${theme.colors.navy};
  }
`;

const CommonTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_medium_12};

  &.click {
    color: ${theme.colors.white};
  }
`;

const CommonPrice = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_extrabold_12};

  &.click {
    color: ${theme.colors.white};
  }
`;

const CommonSeat = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_medium_10};

  &.click {
    color: ${theme.colors.white};
  }
`;

const ClickSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  padding: 2rem 1.7rem;
  border-radius: 1rem;
  background: ${theme.colors.skyBlue};

  & > div {
    display: flex;
    justify-content: space-between;
    width: 21.9rem;
    margin-right: 8rem;
    gap: 0.4rem;
  }

  & > div > section {
    display: flex;
    justify-content: space-around;
  }

  &.click {
    display: none;
  }
`;

const TextContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;
