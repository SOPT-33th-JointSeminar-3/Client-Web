import React from "react";
import PaymentInfo from "../components/paymentPage/PaymentInfo";
import IconLayout from "../components/paymentPage/IconLayout";
import Journey from "../components/paymentPage/Journey";
import Header from "../components/@common/Header";
import UserInfo from "../components/paymentPage/UserInfo";
import CardPersonal from "../components/paymentPage/CardPersonal";
import Footer from "../components/@common/Footer";

const PaymentPage = () => {
  return (
    <>
      <Header />
      <PaymentInfo />
      <Journey />
      <UserInfo />
      <CardPersonal />
      <Footer />
    </>
  );
};

export default PaymentPage;
