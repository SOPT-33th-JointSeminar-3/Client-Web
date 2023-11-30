import Header from "../components/@common/Header";
import { useLocation } from "react-router-dom";
import { Banner } from "../components/mainPage/Banner";
import { Booking } from "../components/mainPage/Booking";
import { Footer } from "../components/mainPage/Footer";
import { Notice } from "../components/mainPage/Notice";
import { Promotion } from "../components/mainPage/Promotion";
import { Service } from "../components/mainPage/Service";

const MainPage = () => {
  const { state } = useLocation();

  return (
    <>
      <Header />
      <Booking state={state} />
      <Promotion />
      <Notice />
      <Banner />
      <Service />
      <Footer />
    </>
  );
};

export default MainPage;
