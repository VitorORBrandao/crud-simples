import { createContext, useContext, useState } from "react";
import type { Auth, AuthContextType, AuthProviderProps } from "../types/auth.types";

const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => undefined,
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within AuthProvider");

  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth | null>(null);
    // const [auth, setAuth] = useState<Auth | null>( {email:"a@b.com", token: "1726reashjdbaosuydtg2q"} );

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};