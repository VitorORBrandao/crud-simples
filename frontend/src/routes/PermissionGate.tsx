import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";
import type { AuthPayload } from "../types/auth.types";

interface PermissionGateProps {
  permission?: string;
  children: ReactNode;
}

export const PermissionGate = (props: PermissionGateProps) => {
  const { permission, children } = props;
  const { auth } = useAuth();

  if (!permission) return <>{children}</>;

  const token = auth?.token ? jwtDecode<AuthPayload>(auth.token) : null;

  if (!auth || !token?.permissions?.includes(permission)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};
