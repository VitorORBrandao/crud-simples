import type { JSX } from "react";
import { createBrowserRouter } from "react-router";
import MenuLateral from "../components/MenuLateral";
import { DashboardPage } from "../pages/Dashboard";
import { EstoquePage } from "../pages/Estoque";
import { FinanceiroPage } from "../pages/Financeiro";
import { LoginPage } from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import Root from "./Root";
import { ErrorPage } from "../pages/Error";

const createProtectedRoute = (element: JSX.Element) => (
  <ProtectedRoute>
    <MenuLateral>
      {element}
    </MenuLateral>
  </ProtectedRoute>
);


const routes = [
  {
    index: true,
    element: createProtectedRoute(<DashboardPage />),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/estoque",
    element: createProtectedRoute(<EstoquePage />),
  },
  {
    path: "/financeiro",
    element: createProtectedRoute(<FinanceiroPage />),
  }
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);
