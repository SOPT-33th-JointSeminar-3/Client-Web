import React from "react";
import Header from "../components/@common/Header";
import FlightLayout from "../components/@common/FlightLayout";
import FlightDate from "../components/flightInfoPage/FlightDate";
import styled from "styled-components";
import FlightCard from "../components/flightInfoPage/FlightCard";
import FlightCardGroup from "../components/flightInfoPage/FlightCardGroup";
import Footer from "../components/flightInfoPage/Footer";
import theme from "../styles/theme";
import { FlightBtnFilter } from "../assets";

const FlightInfoPage = () => {
  return (
    <Wrapper>
      <Header />
      <FlightLayout />
      <FlightDate />
      <FlightCardGroup />

      <Footer />
    </Wrapper>
  );
};

export default FlightInfoPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* padding: 1rem; */
`;
