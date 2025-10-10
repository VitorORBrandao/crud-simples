import { createBrowserRouter } from "react-router";
import { ErrorPage } from "../pages/Error";
import { resolveLayout } from "./layouts/layoutResolver";
import { Root } from "./Root";
import { routes } from "./Routes";

const routesWithLayouts = routes.map((route) => ({
  ...route,
  element: resolveLayout(route, routes),
}));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routesWithLayouts,
  },
]);
