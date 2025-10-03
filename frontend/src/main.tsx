import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { router } from "./Routes.tsx";
import { AuthContext } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
