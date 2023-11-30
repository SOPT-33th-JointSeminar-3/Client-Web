import React, { useEffect, useState } from "react";
import Header from "../components/@common/Header";
import FlightLayout from "../components/@common/FlightLayout";
import FlightDate from "../components/flightInfoPage/FlightDate";
import styled from "styled-components";
import FlightCard from "../components/flightInfoPage/FlightCard";
import FlightCardGroup from "../components/flightInfoPage/FlightCardGroup";
import Footer from "../components/flightInfoPage/Footer";
import theme from "../styles/theme";
import { FlightBtnFilter } from "../assets";
import { getFlightInfo } from "../api/getFlightInfo";

const FlightInfoPage = () => {
  const [startNation, setStartNation] = useState("");
  const [endNation, setEndNation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getFlightInfo(startNation, endNation);
        console.log("FlightInfoPage 내 :", getData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
