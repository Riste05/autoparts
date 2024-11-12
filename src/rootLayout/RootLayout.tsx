import { Outlet } from "react-router-dom";
import { NavBar } from "../pages/home/component/header/NavBar";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
