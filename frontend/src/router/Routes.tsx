import {
  PiChartBarFill,
  PiClipboardTextBold,
  PiPiggyBankBold,
} from "react-icons/pi";
import { DashboardPage } from "../pages/Dashboard";
import { EstoquePage } from "../pages/Estoque";
import { FinanceiroPage } from "../pages/Financeiro";
import { LoginPage } from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import type { AppRoute } from "../types/route.type";

export const routes: AppRoute[] = [
  {
    index: true,
    element: <DashboardPage />,
    icon: <PiChartBarFill />,
    name: "Dashboard",
    hasMenu: true,
    isProtected: true,
    isVisible: true,
    permission: "dashboard",
  },
  {
    path: "/login",
    index: false,
    element: <LoginPage />,
    name: "Login",
    hasMenu: false,
    isProtected: false,
    isVisible: false,
  },
  {
    path: "/estoque",
    element: <EstoquePage />,
    icon: <PiClipboardTextBold />,
    name: "Estoque",
    hasMenu: true,
    isProtected: true,
    isVisible: true,
    permission: "estoque",
  },
  {
    path: "/financeiro",
    element: <FinanceiroPage />,
    icon: <PiPiggyBankBold />,
    name: "Financeiro",
    hasMenu: true,
    isProtected: true,
    isVisible: true,
    permission: "financeiro",
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
    name: "Unauthorized",
    hasMenu: false,
    isProtected: true,
    isVisible: false,
  },
];
