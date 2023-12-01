import styled from "styled-components";
import theme from "../../styles/theme";
import { IcPaymentShotarrow, IcRightPayment, LogoJinair } from "../../assets";

const Journey = () => {
  return (
    <Layout>
      <JouneyTitle>여정 정보</JouneyTitle>
      <DepartInfo>
        <Title>가는 편</Title>
        <Date>2023년 12월 14일</Date>
        <DetailInfoLayout>
          <DepartureLayout>
            <div>
              <EnglishTitle>GMP</EnglishTitle>
              <FlightTime>06:05</FlightTime>
            </div>
            <EnglishSubTitle>서울/김포</EnglishSubTitle>
            <IcPaymentShotarrow />
            <div>
              <EnglishTitle>CJU</EnglishTitle>
              <FlightTime>07:15</FlightTime>
            </div>
            <EnglishSubTitle>제주</EnglishSubTitle>
          </DepartureLayout>
          <IcRightPayment />
        </DetailInfoLayout>
        <TicketLayout>
          <PlaneInfo>KE5153</PlaneInfo>
          <LogoJinair />
          <JinairTitle>진에어 운항</JinairTitle>
          <JinairTitle>일반석(S)</JinairTitle>
        </TicketLayout>
      </DepartInfo>

      <DepartInfo>
        <Title>오는 편</Title>
        <Date>2023년 12월 18일</Date>
        <DetailInfoLayout>
          <DepartureLayout>
            <div>
              <EnglishTitle>CJU</EnglishTitle>
              <FlightTime>06:05</FlightTime>
            </div>
            <EnglishSubTitle>제주</EnglishSubTitle>
            <IcPaymentShotarrow />
            <div>
              <EnglishTitle>GMP</EnglishTitle>
              <FlightTime>07:15</FlightTime>
            </div>
            <EnglishSubTitle>서울/김포</EnglishSubTitle>
          </DepartureLayout>
          <IcRightPayment />
        </DetailInfoLayout>
      </DepartInfo>
    </Layout>
  );
};

export default Journey;

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  flex-shrink: 0;
`;

const JouneyTitle = styled.p`
  ${theme.fonts.body_extrabold_20};
  color: ${theme.colors.navy};
`;

const DepartInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  border-radius: 10px;
  border: 0.1rem solid ${theme.colors.grey_4};
`;

const Title = styled.h1`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_16};
`;

const Date = styled.p`
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12};
  margin-top: 1rem;
`;

const DetailInfoLayout = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  & > svg {
    position: absolute;
    right: 1rem;
    top: 40%;
  }
`;

const DepartureLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
  margin-top: 0.5rem;
`;

const EnglishTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_14};
`;

const EnglishSubTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_regular_12};
`;

const FlightTime = styled.div`
  display: flex;
  gap: 9rem;

  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
`;

const TicketLayout = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.6rem;
`;

const PlaneInfo = styled.div`
  color: ${theme.colors.navy};
  ${theme.fonts.body_bold_12};
`;

const JinairTitle = styled.div`
  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
`;
