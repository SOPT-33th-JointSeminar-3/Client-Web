import React, { useEffect, useState } from "react";
import PaymentInfo from "../components/paymentPage/PaymentInfo";
import IconLayout from "../components/paymentPage/IconLayout";
import Journey from "../components/paymentPage/Journey";
import Header from "../components/@common/Header";
import UserInfo from "../components/paymentPage/UserInfo";
import CardPersonal from "../components/paymentPage/CardPersonal";
import Footer from "../components/@common/Footer";
import styled from "styled-components";
import { getReserve } from "../api/getReserve";

const PaymentPage = () => {
  const [firstName, setFirstName] = useState("정");
  const [lastName, setLastName] = useState("가윤");
  const [gender, setGenderName] = useState("여자");
  const [birth, setBirthName] = useState("2002-09-14");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getReserve(firstName, lastName, gender, birth);

        console.log(postData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
