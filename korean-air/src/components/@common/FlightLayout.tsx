import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import backgroundImage from "../../assets/image/background_payment2.png";
import { IcDownPayment, IcPaymentPlane } from "../../assets";

const FlightLayout = () => {
  return (
    <Content>
      <BackgroundPayment />
      <Airport>
        <Layout>
          <CommonLayout>
            <EnglishTitle>SEL</EnglishTitle>
            <KoreanTitle>서울</KoreanTitle>
          </CommonLayout>
          <CommonLayout>
            <IcPaymentPlane />
          </CommonLayout>
          <CommonLayout>
            <EnglishTitle>CJU</EnglishTitle>
            <KoreanTitle>제주</KoreanTitle>
          </CommonLayout>
          <IcDownIcon />
        </Layout>
      </Airport>
    </Content>
  );
};

export default FlightLayout;

const Content = styled.section`
  flex-shrink: 0;
  position: relative;
`;

const Airport = styled.div`
  width: 90%;
  height: 6.6rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin: 1.6rem 1.6rem 1.6rem 2rem;
  border-radius: 0.9615rem;
  box-shadow: 0px 20px 20px 0px rgba(107, 117, 136, 0.2);
`;

const Layout = styled.section`
  display: flex;
  padding: 0.5rem;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 2rem;
`;

const CommonLayout = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const EnglishTitle = styled.p`
  font: ${theme.fonts.title_bold_18};
`;

const KoreanTitle = styled.p`
  font: ${theme.fonts.body_regular_12};
`;

const BackgroundPayment = styled.div`
  background: url(${backgroundImage});
  position: absolute;
  width: 100%;
  height: 6.2rem; //TODO 피그마 보고 했는데 수정 필요?
`;

const IcDownIcon = styled.div`
  background: url(${IcDownPayment});
  width: 2.4rem;
  height: 2.4rem;
`;
