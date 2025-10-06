import MenuLateral from "../../components/MenuLateral";
import { PermissionGate } from "../PermissionGate";
import type { AppRoute } from "../../types/route.type";

export const MenuLayout = ({
  routes,
  permission,
}: {
  routes: AppRoute[];
  permission?: string;
}) => (
  <PermissionGate permission={permission}>
    <MenuLateral routes={routes} />
  </PermissionGate>
);
