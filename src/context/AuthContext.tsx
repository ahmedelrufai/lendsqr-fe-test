import { createContext, useContext, useState } from "react";
import { User } from "../types";

type AuthContextType = {
  userState: [User | null, React.Dispatch<React.SetStateAction<User | null>>];
  logged: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export const AuthContext = createContext<AuthContextType>({
  userState: [null, () => {}],
  logged: [false, () => {}],
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const state: AuthContextType = {
    userState: [user, setUser],
    logged: [isLoggedIn, setIsLoggedIn],
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
