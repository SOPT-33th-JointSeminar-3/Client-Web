import { useEffect } from "react";
import Header from "../components/@common/Header";
import FlightLayout from "../components/@common/FlightLayout";
import FlightDate from "../components/flightInfoPage/FlightDate";
import styled from "styled-components";
import FlightCardGroup from "../components/flightInfoPage/FlightCardGroup";
import Footer from "../components/flightInfoPage/Footer";
import { getFlightInfo } from "../api/getFlightInfo";

const FlightInfoPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getFlightInfo();
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
