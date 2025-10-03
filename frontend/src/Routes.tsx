import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import type { JSX } from "react";

const createProtectedRoute = (element: JSX.Element) => (
  <ProtectedRoute>
    {element}
  </ProtectedRoute>
);


export const router = createBrowserRouter([
  {
    index: true,
    element: createProtectedRoute(<HomePage />),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
