import { createContext, useMemo, useState } from "react";
import type {
  Auth,
  AuthContextType,
  AuthProviderProps,
} from "../types/auth.types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // const [auth, setAuth] = useState<Auth | null>(null);
  const [auth, setAuth] = useState<Auth | null>({
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2aXRpbmhvQGRlbGEuY29tIiwibmFtZSI6IlZpdG9yIENhc2FkbyIsInBlcm1pc3Npb25zIjpbImRhc2hib2FyZCIsImVzdG9xdWUiXSwiaWF0IjoxNzU5ODY1MDgzfQ.JIjsu4EMUxZnICdw55I0SAWXFXg_LcGb16u5lWoSszU",
  });

  const value = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
