import React from "react";
import PaymentInfo from "../components/paymentPage/PaymentInfo";
import IconLayout from "../components/paymentPage/IconLayout";
import Journey from "../components/paymentPage/Journey";
import Header from "../components/@common/Header";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <PaymentInfo />
      <Journey />
    </>
  );
};

export default PaymentPage;
