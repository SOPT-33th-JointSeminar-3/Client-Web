import styled from "styled-components";
import { IcPaymentSave, IcPaymentShare } from "../../assets";
import theme from "../../styles/theme";

const IconLayout = () => {
  return (
    <Layout>
      <InsideLayout>
        <IconDiv>
          <IcPaymentSave />
          <IconName>저장</IconName>
        </IconDiv>
        <IconDiv>
          <IcPaymentShare />
          <IconName>공유</IconName>
        </IconDiv>
      </InsideLayout>
    </Layout>
  );
};

export default IconLayout;

const Layout = styled.div`
  display: flex;
  width: 100%;
  float: left;
`;

const InsideLayout = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 18rem;
`;

const IconDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  background-color: white;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const IconName = styled.p`
  ${theme.fonts.body_regular_14};
`;
