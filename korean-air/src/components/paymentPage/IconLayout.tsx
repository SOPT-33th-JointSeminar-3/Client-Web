import React from "react";
import styled from "styled-components";
import FlightLayout from "../@common/FlightLayout";
import { IcPaymentSave, IcPaymentShare } from "../../assets";
import theme from "../../styles/theme";

const IconLayout = () => {
  return (
    <Layout>
      <InsideLayout>
        <IconDiv>
          <IcSaveIcon />
          <IconName>저장</IconName>
        </IconDiv>
        <IconDiv>
          <IcShareIcon />
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
  height: 20rem;
  /* background-color: pink; */
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

const IcSaveIcon = styled.div`
  background: url(${IcPaymentSave});
  width: 1.6rem;
  height: 1.6rem;
`;

const IconName = styled.p`
  font: ${theme.fonts.body_regular_14};
`;

const IcShareIcon = styled.div`
  background: url(${IcPaymentShare});
  width: 1.6rem;
  height: 1.6rem;
`;
