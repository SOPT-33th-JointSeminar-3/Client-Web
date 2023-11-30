import { useEffect, useState } from "react";
import Header from "../components/@common/Header";
import FlightLayout from "../components/@common/FlightLayout";
import FlightDate from "../components/flightInfoPage/FlightDate";
import styled from "styled-components";
import FlightCardGroup from "../components/flightInfoPage/FlightCardGroup";
import Footer from "../components/flightInfoPage/Footer";
import { getFlightInfo } from "../api/getFlightInfo";
import { FlightInfoItem } from "../types/types";

const FlightInfoPage = () => {
  const [data, setData] = useState<FlightInfoItem[]>([]); //Todo 챌린징 요소에 적어 놓았음

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await getFlightInfo();
        setData(getData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <Wrapper>
      <Header />
      <FlightLayout />
      <FlightDate />
      <FlightCardGroup data={data} />
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
