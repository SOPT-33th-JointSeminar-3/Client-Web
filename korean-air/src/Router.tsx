import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
