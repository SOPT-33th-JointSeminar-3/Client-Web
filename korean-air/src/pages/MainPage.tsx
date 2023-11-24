import { Banner } from "../components/mainPage/Banner";
import { Booking } from "../components/mainPage/Booking";
import { Notice } from "../components/mainPage/Notice";
import { Promotion } from "../components/mainPage/Promotion";
import { Service } from "../components/mainPage/Service";

const MainPage = () => {
  return (
    <>
      <Booking />
      <Promotion />
      <Notice />
      <Banner />
      <Service />
    </>
  );
};

export default MainPage;
