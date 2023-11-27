import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import FinishPage from "./pages/FinishPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/finish" element={<FinishPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
