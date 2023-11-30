import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FinishPage from "./pages/FinishPage";
import PaymentPage from "./pages/PaymentPage";
import SearchPage from "./pages/SearchPage";
import FlightInfoPage from "./pages/FlightInfoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/flight" element={<FlightInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
