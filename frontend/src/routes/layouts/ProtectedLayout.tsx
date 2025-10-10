import type { ReactNode } from "react";
import { PermissionGate } from "../PermissionGate";
import { ProtectedRoute } from "../ProtectedRoute";

interface ProtectedLayoutProps {
  children: ReactNode;
  permission?: string;
}

export const ProtectedLayout = ({
  children,
  permission,
}: ProtectedLayoutProps) => (
  <ProtectedRoute>
    <PermissionGate permission={permission}>{children}</PermissionGate>
  </ProtectedRoute>
);
