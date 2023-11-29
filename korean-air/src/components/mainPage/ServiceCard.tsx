import styled from "styled-components";
import {
  IcCar,
  IcCard,
  IcHotel,
  IcProduct,
  IcSecurity,
  IcShopping,
} from "../../assets";

export const ServiceCard = () => {
  return (
    <>
      <Card>
        <ServiceName>
          대한항공
          <br />
          카드
        </ServiceName>
        <IcCard />
      </Card>
      <Card>
        <ServiceName>호텔</ServiceName>
        <IcHotel />
      </Card>
      <Card>
        <ServiceName>렌터카</ServiceName>
        <IcCar />
      </Card>
      <Card>
        <ServiceName>
          기내
          <br /> 면세점
        </ServiceName>
        <IcShopping />
      </Card>
      <Card>
        <ServiceName>
          여행자
          <br />
          보험
        </ServiceName>
        <IcSecurity />
      </Card>
      <Card>
        <ServiceName>여행 상품</ServiceName>
        <IcProduct />
      </Card>
    </>
  );
};

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4.2rem;
  padding: 1.6rem;
  margin-right: 1.6rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.navy};

  & svg {
    align-self: flex-end;
  }
`;

const ServiceName = styled.p`
  width: 8.8rem;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_semibold_16}
`;
