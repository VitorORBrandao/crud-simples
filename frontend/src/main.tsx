import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import "./index.css";
import { router } from "./router/Router.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
