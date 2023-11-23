import { Banner } from "../components/mainPage/Banner";
import { Booking } from "../components/mainPage/Booking";
import { Notice } from "../components/mainPage/Notice";
import { Promotion } from "../components/mainPage/Promotion";

const MainPage = () => {
  return (
    <>
      <Booking />
      <Promotion />
      <Notice />
      <Banner />
    </>
  );
};

export default MainPage;
