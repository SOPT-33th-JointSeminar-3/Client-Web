import { useEffect, useState } from "react";
import Header from "../components/@common/Header";
import FlightLayout from "../components/@common/FlightLayout";
import FlightDate from "../components/flightInfoPage/FlightDate";
import styled from "styled-components";
import FlightCardGroup from "../components/flightInfoPage/FlightCardGroup";
import Footer from "../components/flightInfoPage/Footer";
import { getFlightInfo } from "../api/getFlightInfo";
import { FlightInfoItem } from "../types/types";
import Navbar from "../components/flightInfoPage/Navbar";

const FlightInfoPage = () => {
  const [data, setData] = useState<FlightInfoItem[]>([]); //Todo 챌린징 요소에 적어 놓았음
  const [selectedPrice, setSelectedPrice] = useState<number>(0);

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

  return (
    <Wrapper>
      <Header />
      <Navbar />
      <FlightLayout />
      <FlightDate />
      <FlightCardGroup data={data} setSelectedPrice={setSelectedPrice} />
      <Footer selectedPrice={selectedPrice} />
    </Wrapper>
  );
};

export default FlightInfoPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 43rem;
  position: relative;
`;
