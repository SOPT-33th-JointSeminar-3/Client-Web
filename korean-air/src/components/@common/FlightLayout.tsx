import styled from "styled-components";
import theme from "../../styles/theme";
import backgroundImage from "../../assets/image/background_payment.png";
import { IcDownPayment, IcPaymentPlane } from "../../assets";

const FlightLayout = () => {
  return (
    <Content>
      <BackgroundPayment />
      <Airport>
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
        <IcDownPayment />
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
  display: flex;
  gap: 2.6rem;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 6.6rem;
  position: relative;

  background: #fff;
  margin: 1.6rem 1.6rem 1.6rem 2rem;
  border-radius: 0.9615rem;
  box-shadow: 0rem 2rem 2rem 0rem rgba(107, 117, 136, 0.2);

  & > svg {
    position: absolute;
    right: 1rem;
  }
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
  ${theme.fonts.title_bold_18};
`;

const KoreanTitle = styled.p`
  ${theme.fonts.body_regular_12};
`;

const BackgroundPayment = styled.div`
  background: url(${backgroundImage});
  position: absolute;
  width: 100%;
  height: 6.2rem;
`;
