import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ChessPage from "./pages/ChessPage.tsx";
import StickerBookPage from "./pages/StickerBookPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ConsolePage from "./pages/ConsolePage.tsx";
import ManageProjectPage from "./pages/ManageProjectPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/chess",
    element: <ChessPage />,
  },
  {
    path: "/stickers",
    element: <StickerBookPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/console",
    element: <ConsolePage />,
  },
  {
    path: "/console/projects/:id",
    element: <ManageProjectPage />,
  },
  {
    path: "/console/projects",
    element: <ManageProjectPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
