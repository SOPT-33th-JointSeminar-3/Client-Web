import styled from "styled-components";

export const Booking = () => {
  return (
    <BookingBox>
      <CardBox>
        <CardBody>
          <Header>
            <p>일반 예매</p>
            <p>마일리지 예매</p>
          </Header>
          <SelectCityBox>
            <WayBox>
              <p>왕복</p>
              <p>편도</p>
              <p>다구간</p>
            </WayBox>
            <CityBox>
              <City>
                <p>출발</p>
                <p>From</p>
              </City>
              <City>
                <p>도착</p>
                <p>To</p>
              </City>
            </CityBox>
          </SelectCityBox>
          <SelectBox>날짜를 선택하세요</SelectBox>
          <SelectBox>탑승 인원을 선택하세요</SelectBox>
          <SelectBox>좌석 등급을 선택하세요</SelectBox>
        </CardBody>
        <CardFooter>
          <SearchBtn> 항공편 검색</SearchBtn>
        </CardFooter>
      </CardBox>
    </BookingBox>
  );
};

const BookingBox = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
`;
const CardBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  box-shadow: 0px 3px 11.8px 3px rgba(187, 187, 187, 0.25);
  border-radius: 1rem;
`;
const CardBody = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  width: 100%;

  & p {
    text-align: center;
    padding: 1.2rem 0;
    width: 50%;
    border-top-right-radius: 1rem;
    ${({ theme }) => theme.fonts.body_semibold_14}
  }

  & > p:nth-child(1) {
    color: ${({ theme }) => theme.colors.navy};
  }
  & > p:nth-child(2) {
    color: ${({ theme }) => theme.colors.grey_3};
    background-color: ${({ theme }) => theme.colors.grey_5};
  }
`;
const SelectCityBox = styled.div`
  width: 100%;
`;
const WayBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  padding: 2rem 0 2.3rem 0;

  & p {
    ${({ theme }) => theme.fonts.body_regular_14}
  }
`;

const CityBox = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grey_3};
`;
const City = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.fonts.body_semibold_12}
  & > p:nth-child(1) {
    ${({ theme }) => theme.fonts.title_bold_30}
  }
  margin-bottom: 2.8rem;
`;
const SelectBox = styled.div`
  padding: 1.4rem 0;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: center;
`;
const SearchBtn = styled.button``;
