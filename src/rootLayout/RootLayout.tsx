import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { NavBar } from "../pages/home/component/header/NavBar";
import { Footer } from "../pages/home/component/footer/Footer";
import { Loader } from "../UI/Loader";

export const RootLayout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
      </Suspense>
    </>
  );
};
