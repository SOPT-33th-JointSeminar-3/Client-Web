import styled from "styled-components";
import { IcCalendar, IcClass, IcPerson, IcSwap, IcHelp } from "../../assets";
export const Booking = () => {
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
              <City>
                <p>출발</p>
                <p>From</p>
              </City>
              <IcSwap />
              <City>
                <p>도착</p>
                <p>To</p>
              </City>
            </CityBox>
          </SelectCityBox>
          <SelectBox>
            <Select>
              <IcCalendar />
              날짜를 선택하세요.
            </Select>
            <Select>
              <IcPerson />
              탑승 인원을 선택하세요.
            </Select>
            <Select>
              <IcClass />
              좌석 등급을 선택하세요.
            </Select>
          </SelectBox>
        </CardBody>
        <SearchBtn> 항공편 검색</SearchBtn>
      </CardBox>
      <BtnBox>
        <FlightBtn>예약 조회 및 체크인</FlightBtn>
        <FlightBtn>항공편 현황</FlightBtn>
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
const CardBody = styled.section`
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
const SelectCityBox = styled.div`
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
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme }) => theme.colors.grey_3};
`;
const City = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 2.8rem;
  ${({ theme }) => theme.fonts.body_semibold_12}
  & > p:nth-child(1) {
    ${({ theme }) => theme.fonts.title_bold_30}
  }
`;
const SelectBox = styled.div`
  width: 100%;
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
  color: white;
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FlightBtn = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_5};
  color: ${({ theme }) => theme.colors.navy};
`;
