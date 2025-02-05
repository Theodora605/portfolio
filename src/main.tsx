import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ChessPage from "./pages/ChessPage.tsx";
import StickerBookPage from "./pages/StickerBookPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import App from "./App.tsx";

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
    path: "/app",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
