import React from "react";
import styled from "styled-components";
import backgroundImage from "../../assets/image/background_payment2.png";
import FlightLayout from "../@common/FlightLayout";

const PaymentInfo = () => {
  return (
    <FlightLayout />
    // <Content>
    //   <BackgroundPayment />
    //   <Airport>
    //     <FlightLayout />
    //   </Airport>
    // </Content>
  );
};

export default PaymentInfo;

const Content = styled.section`
  flex-shrink: 0;
  position: relative;
`;

const BackgroundPayment = styled.div`
  background: url(${backgroundImage});
  position: absolute;
  width: 100%;
  height: 6.2rem; //TODO 피그마 보고 했는데 수정 필요?
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
