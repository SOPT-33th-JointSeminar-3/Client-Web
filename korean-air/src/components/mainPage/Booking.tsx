import styled, { css } from "styled-components";
import {
  IcCalendar,
  IcClass,
  IcPerson,
  IcSwap,
  IcHelp,
  IcSwapBlue,
} from "../../assets";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  arriveState,
  departureState,
  fromState,
  toState,
} from "../../recoil/atom";
import { useState } from "react";

interface Text {
  $departure: string;
  $arrive: string;
}

export const Booking = ({ state }: { state: string[] }) => {
  const navigate = useNavigate();
  const [from, setFrom] = useRecoilState<string>(fromState);
  const [to, setTo] = useRecoilState<string>(toState);

  const [person, setPerson] = useState(false);
  const [grade, setGrade] = useState(false);

  const handleSelectPerson = () => {
    setPerson(true);
  };
  const handleSelectGrade = () => {
    setGrade(true);
  };

  const [arrive, setArrive] = useRecoilState<string>(arriveState);
  const [departure, setDeparture] = useRecoilState<string>(departureState);
  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    navigate("/search", { state: e.currentTarget.id });
  };
  const handleSwapClick = () => {
    const copyDeparture = departure;
    setDeparture(arrive);
    setArrive(copyDeparture);

    const copyFrom = from;
    setFrom(to);
    setTo(copyFrom);
  };
  return (
    <BookingBox>
      <CardBox>
        <CardBody>
          <Header>
            <GeneralBook>일반 예매</GeneralBook>
            <MileageBook>마일리지 예매</MileageBook>
          </Header>
          <SelectCityBox>
            <WayBox>
              <ActiveWay>왕복</ActiveWay>
              <Way>편도</Way>
              <Way>
                다구간
                <IcHelp />
              </Way>
            </WayBox>
            <CityBox>
              <DepartureCity
                onClick={handleClick}
                id="departure"
                $departure={departure}
                $arrive={""}
              >
                <p>{departure}</p>
                <p>{from}</p>
              </DepartureCity>
              {departure === "출발" && arrive === "도착" ? (
                <IcSwap />
              ) : (
                <div onClick={handleSwapClick}>
                  <IcSwapBlue />
                </div>
              )}
              <City>
                <ArriveCity
                  onClick={handleClick}
                  id="arrival"
                  $departure={""}
                  $arrive={arrive}
                >
                  <p>{arrive}</p>
                  <p>{to}</p>
                </ArriveCity>
              </City>
            </CityBox>
          </SelectCityBox>
          <SelectBox>
            <SelectRange
              $isSelected={state !== null}
              onClick={() => {
                navigate("/calendar");
              }}
            >
              <IcCalendar />
              {state === null
                ? "날짜를 선택하세요."
                : `${state[0]
                    .replace(/년|월/g, ".")
                    .replace(/일/g, "")} - ${state[1]
                    .replace(/년|월/g, ".")
                    .replace(/일/g, "")}`}
            </SelectRange>
            <Select onClick={handleSelectPerson}>
              <IcPerson />
              <SelectPerson $person={person}>
                {person ? "성인 1명" : "탑승 인원을 선택하세요"}
              </SelectPerson>
            </Select>
            <Select onClick={handleSelectGrade}>
              <IcClass />
              <SelectGrade $grade={grade}>
                {grade ? "일반석" : "좌석 등급을 선택하세요"}
              </SelectGrade>
            </Select>
          </SelectBox>
        </CardBody>
        <SearchBtn type="button" onClick={() => navigate("/flight")}>
          항공편 검색
        </SearchBtn>
      </CardBox>
      <BtnBox>
        <FlightBtn type="button">예약 조회 및 체크인</FlightBtn>
        <FlightBtn type="button">항공편 현황</FlightBtn>
      </BtnBox>
    </BookingBox>
  );
};

const BookingBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin: 0 1.6rem;
`;
const CardBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0.3rem 1.18rem 0.3rem rgba(187, 187, 187, 0.25);
`;
const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
`;
const Title = styled.p`
  width: 50%;
  padding: 1.2rem 0;
  border-top-right-radius: 1rem;
  ${({ theme }) => theme.fonts.body_semibold_14}
  text-align: center;
`;
const GeneralBook = styled(Title)`
  color: ${({ theme }) => theme.colors.navy};
`;
const MileageBook = styled(Title)`
  background-color: ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme }) => theme.colors.grey_3};
`;
const SelectCityBox = styled.article`
  width: 100%;
`;
const WayBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  padding: 2rem 0 2.3rem 0;
`;
const Way = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grey_3};
  ${({ theme }) => theme.fonts.body_regular_16};
  & svg {
    padding-bottom: 0.3rem;
  }
`;
const ActiveWay = styled.div`
  padding: 0 0.4rem;
  border-bottom: 0.2rem solid;
  color: ${({ theme }) => theme.colors.navy};
  ${({ theme }) => theme.fonts.body_bold_16};
`;
const CityBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.4rem;
  & svg {
    cursor: pointer;
  }
`;
const City = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 10rem;
  gap: 0.3rem;
  margin-bottom: 2.8rem;
  ${({ theme }) => theme.fonts.body_semibold_12}
  & > p:nth-child(1) {
    ${({ theme }) => theme.fonts.title_bold_30}
  }
`;
const SelectBox = styled.article`
  width: 100%;
`;
const SelectRange = styled.div<{ $isSelected: boolean }>`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 0;
  margin: 0 1.8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.navy : theme.colors.grey_3};
  ${({ theme, $isSelected }) =>
    $isSelected ? theme.fonts.body_bold_16 : theme.fonts.body_regular_16}
  &:nth-child(1) {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
  }

  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 0;
  margin: 0 1.8rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme }) => theme.colors.grey_3};
  ${({ theme }) => theme.fonts.body_regular_16}
  &:nth-child(1) {
    border-top: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
  }
  cursor: pointer;
`;
const Button = styled.button`
  padding: 1.2rem;
  border-radius: 1rem;
  border: none;
  ${({ theme }) => theme.fonts.body_semibold_16}
`;
const SearchBtn = styled(Button)`
  margin: 2rem 1.2rem;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
const BtnBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FlightBtn = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme }) => theme.colors.navy};
`;
const DepartureCity = styled(City)<Text>`
  color: ${({ $departure, theme }) =>
    $departure === "출발" ? theme.colors.grey_3 : theme.colors.navy};
  margin-bottom: 0;
  cursor: pointer;
`;
const ArriveCity = styled(City)<Text>`
  color: ${({ $arrive, theme }) =>
    $arrive === "도착" ? theme.colors.grey_3 : theme.colors.navy};
  margin-bottom: 0;
  cursor: pointer;
`;
const SelectPerson = styled.p<{ $person: boolean }>`
  ${({ $person }) =>
    $person
      ? css`
          color: ${({ theme }) => theme.colors.navy};
          ${({ theme }) => theme.fonts.body_bold_16}
        `
      : css`
          color: ${({ theme }) => theme.colors.grey_3};
          ${({ theme }) => theme.fonts.body_regular_16}
        `};
`;
const SelectGrade = styled.p<{ $grade: boolean }>`
  ${({ $grade }) =>
    $grade
      ? css`
          color: ${({ theme }) => theme.colors.navy};
          ${({ theme }) => theme.fonts.body_bold_16}
        `
      : css`
          color: ${({ theme }) => theme.colors.grey_3};
          ${({ theme }) => theme.fonts.body_regular_16}
        `};
`;
