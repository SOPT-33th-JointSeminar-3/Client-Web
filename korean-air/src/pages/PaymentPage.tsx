import PaymentInfo from "../components/paymentPage/PaymentInfo";
import Journey from "../components/paymentPage/Journey";
import Header from "../components/@common/Header";
import UserInfo from "../components/paymentPage/UserInfo";
import CardPersonal from "../components/paymentPage/CardPersonal";
import Footer from "../components/@common/Footer";
import styled from "styled-components";
import Navbar from "../components/paymentPage/Navbar";
import { useState } from "react";

const PaymentPage = () => {
  const [userData, setUserData] = useState({
    lastName: "",
    firstName: "",
    gender: "",
    birth: "",
  });

  const [confirm, setConfirm] = useState(false);

  return (
    <Wrapper>
      <Header />
      <Navbar />
      <PaymentInfo />
      <Journey />
      <UserInfo />
      <CardPersonal
        userData={userData}
        setUserData={setUserData}
        setConfirm={setConfirm}
        confirm={confirm}
      />
      <Footer userData={userData} setUserData={setUserData} confirm={confirm} />
    </Wrapper>
  );
};

export default PaymentPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
