import { Booking } from "../components/mainPage/Booking";
import { Notice } from "../components/mainPage/Notice";
import { Promotion } from "../components/mainPage/Promotion";

const MainPage = () => {
  return (
    <>
      <Booking />
      <Promotion />
      <Notice />
    </>
  );
};

export default MainPage;
