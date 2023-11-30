import React from "react";
import PaymentInfo from "../components/paymentPage/PaymentInfo";
import IconLayout from "../components/paymentPage/IconLayout";
import Journey from "../components/paymentPage/Journey";
import Header from "../components/@common/Header";
import UserInfo from "../components/paymentPage/UserInfo";
import CardPersonal from "../components/paymentPage/CardPersonal";
import Footer from "../components/@common/Footer";
import styled from "styled-components";

const PaymentPage = () => {
  return (
    <Wrapper>
      <Header />
      <PaymentInfo />
      <Journey />
      <UserInfo />
      <CardPersonal />
      <Footer />
    </Wrapper>
  );
};

export default PaymentPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
