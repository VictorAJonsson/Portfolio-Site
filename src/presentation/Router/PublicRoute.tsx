import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const PublicRoute = () => {
  return (
    <>
      <Header /> {/* Aqui, o Header vai mudar dependendo da página */}
      <Outlet />
      <Footer />
    </>
  );
};
