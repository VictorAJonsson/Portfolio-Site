import { Outlet } from "react-router-dom";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

// Supondo que você tenha algum tipo de autenticação
export const PrivateRoute = () => {
  return (
    <>
      <Header /> {/* Exibe o Header com a lógica de destaque */}
      <Outlet />
      <Footer />
    </>
  );
};
