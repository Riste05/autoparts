import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./rootLayout/RootLayout";
import { Home } from "./pages/home/Home";
import { Delovi } from "./pages/delovi/Delovi";
import { Maslo } from "./pages/maslo/Maslo";
import { Dostava } from "./pages/dostava/Dostava";
import { Prasanje } from "./pages/prasanje/Prasanje";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/delovi", element: <Delovi /> },
      { path: "/maslo", element: <Maslo /> },
      { path: "/dostava", element: <Dostava /> },
      { path: "/prasanje", element: <Prasanje /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
