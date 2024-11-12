import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./pages/home/HomePage";
import { DeloviPage } from "./pages/delovi/DeloviPage";
import { Maslo } from "./pages/maslo/Maslo";
import { RootLayout } from "./rootLayout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/delovi", element: <DeloviPage /> },
      { path: "/maslo", element: <Maslo /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
