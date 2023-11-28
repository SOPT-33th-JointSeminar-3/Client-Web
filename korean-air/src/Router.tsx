import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FinishPage from "./pages/FinishPage";
import PaymentPage from "./pages/PaymentPage";
import CalendarPage from "./pages/CalendarPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
