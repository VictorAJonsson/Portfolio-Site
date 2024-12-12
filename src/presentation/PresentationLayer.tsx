import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Home/index";

export const PresentationLayer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};
