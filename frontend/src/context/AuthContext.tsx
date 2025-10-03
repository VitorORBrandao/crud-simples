import { createContext, useState, type JSX } from "react";
import type { Auth, AuthContextType, AuthProviderProps } from "../types/auth.types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [auth, setAuth] = useState<Auth | null>();

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};
