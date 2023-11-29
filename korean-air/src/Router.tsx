import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FinishPage from "./pages/FinishPage";
import PaymentPage from "./pages/PaymentPage";
import SearchPage from "./pages/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
