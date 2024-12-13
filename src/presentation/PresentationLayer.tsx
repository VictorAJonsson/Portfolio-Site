import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";

export const PresentationLayer = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
