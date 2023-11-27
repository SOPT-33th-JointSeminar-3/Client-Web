import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { IcPaymentShotarrow, LogoJinair } from "../../assets";

const Journey = () => {
  return (
    <Layout>
      <JouneyTitle>여정 정보</JouneyTitle>
      <DepartInfo>
        <Title>가는 편</Title>
        <Date>2023년 11월 29일 (수)</Date>
        <DetailInfoLayout>
          <DepartureLayout>
            <EnglishTitle>GMP</EnglishTitle>
            <EnglishSubTitle>서울/김포</EnglishSubTitle>
            <IcShotarrowIcon />
            <EnglishTitle>CJU</EnglishTitle>
            <EnglishSubTitle>제주</EnglishSubTitle>
          </DepartureLayout>
        </DetailInfoLayout>
        <FlightTime>06:05</FlightTime>
        <FlightTime>07:15</FlightTime>
        <TicketLayout>
          <PlaneInfo>KE5153</PlaneInfo>
          <JinairLogo />
          <JinairTitle>진에어 운항</JinairTitle>
          <JinairTitle>일반석(S)</JinairTitle>
        </TicketLayout>
      </DepartInfo>
    </Layout>
  );
};

export default Journey;

const Layout = styled.section`
  padding: 2rem;
  flex-shrink: 0;
`;
// body extrabold 20이 없어 ㅠㅠ TODO
const JouneyTitle = styled.p`
  ${theme.fonts.body_extrabold_16};
  color: ${theme.colors.navy};
`;

//TODO var 물어보기 (theme)
const DepartInfo = styled.div`
  height: 16.6rem;
  flex-shrink: 0;
  border-radius: 10px;
  border: 0.1rem solid var(--grey_4, #c7c9d9);
  padding: 0.6rem;
  margin: 1rem;
`;

const Title = styled.h1`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_16};
  margin-left: 2rem;
  margin-top: 2rem;
`;

const Date = styled.p`
  color: ${theme.colors.grey_3};
  ${theme.fonts.body_medium_12};
  margin-left: 2rem;
  margin-top: 1rem;
`;

const DetailInfoLayout = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DepartureLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  gap: 0.4rem;
  margin-top: 0.5rem;
`;

const EnglishTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_bold_14};
  margin-left: 2rem;
`;

const EnglishSubTitle = styled.p`
  color: ${theme.colors.black};
  ${theme.fonts.body_regular_12};
`;

const IcShotarrowIcon = styled.div`
  background: url(${IcPaymentShotarrow});
  width: 2.9rem;
  height: 0.9rem;
`;

const FlightTime = styled.p`
  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
  margin-left: 2rem;
`;

const TicketLayout = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 2rem;
  margin-top: 1rem;
  gap: 0.6rem;
`;

const PlaneInfo = styled.div`
  color: ${theme.colors.navy};
  ${theme.fonts.body_bold_12};
`;

const JinairLogo = styled.div`
  background: url(${LogoJinair});
  width: 1.2rem;
  height: 1rem;
`;

const JinairTitle = styled.div`
  color: ${theme.colors.navy};
  ${theme.fonts.body_medium_12};
`;
