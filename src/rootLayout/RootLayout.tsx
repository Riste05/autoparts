import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "../pages/home/component/header/NavBar";
import { Footer } from "../pages/home/component/footer/Footer";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};
